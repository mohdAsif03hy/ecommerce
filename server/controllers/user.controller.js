import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
import sendEmailFun from "../config/sendEmail.js";
import VerifyEmailTemplate from "../utils/VerifyEmailTemplate.js";
import bcrypt from "bcryptjs";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
    secure: true
});


/*


========================================================
1. REGISTER USER
========================================================

Flow:

Client
  ↓
name, email, password
  ↓
Validate input
  ↓
Check existing user
  ↓
Generate OTP
  ↓
Hash password
  ↓
Save user
  ↓
Send verification email
  ↓
Return response
*/
export async function registerUserController(req, res) {
    try {
        // Get data sent by frontend
        const { name, email, password } = req.body;

        // Check whether all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Provide name, email, and password",
                error: true,
                success: false
            });
        }

        // Check whether user already exists
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already registered with this email",
                error: true,
                success: false
            });
        }

        /*
        Generate a 6-digit OTP.

        Example:
        483921
        */
        const verifyCode = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        /*
        Password should NEVER be stored as plain text.

        Example:

        password:
        "123456"

        becomes something like:

        "$2a$10$....."
        */

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        /*
        Create new user document
        */
        const user = new UserModel({
            name,
            email,
            password: hashPassword,

            // Store OTP temporarily
            otp: verifyCode,

            // OTP expires after 10 minutes
            otpExpires: new Date(Date.now() + 10 * 60 * 1000)
        });

        // Save user in MongoDB
        await user.save();

        /*
        Send verification email
        */
        const emailSent = await sendEmailFun(
            email,
            "Verify email from Ecommerce",
            `Your verification code is ${verifyCode}`,
            VerifyEmailTemplate(name, verifyCode)
        );

        // If email sending failed
        if (!emailSent) {
            return res.status(500).json({
                message:
                    "User created, but verification email could not be sent",
                error: true,
                success: false
            });
        }

        /*
        Create JWT.

        Payload:
        {
            email: user.email,
            id: user._id
        }

        This token identifies the user.
        */
        const token = jwt.sign(
            {
                email: user.email,
                id: user._id
            },
            process.env.JSON_WEB_TOKEN_SECRET_KEY,
            {
                expiresIn: "10m"
            }
        );

        return res.status(201).json({
            success: true,
            message:
                "User registered successfully! Please verify your email.",
            token
        });

    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


/*
========================================================
2. VERIFY EMAIL
========================================================

Frontend sends:

{
    email: "abc@gmail.com",
    otp: "483921"
}

Backend:

Find user
   ↓
Check OTP
   ↓
Check OTP expiration
   ↓
Verify email
   ↓
Remove OTP
*/
export async function verifyEmailController(req, res) {
    try {
        const { email, otp } = req.body;

        // Find user using email
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
                error: true
            });
        }

        // Check OTP
        const isCodeValid = user.otp === otp;

        // Check OTP expiration
        const isNotExpired =
            user.otpExpires &&
            user.otpExpires > new Date();

        /*
        Both conditions must be true:

        OTP correct
        +
        OTP not expired
        */
        if (isCodeValid && isNotExpired) {

            // Mark email as verified
            user.verify_email = true;

            // OTP is no longer needed
            user.otp = null;
            user.otpExpires = null;

            // Save changes
            await user.save();

            return res.status(200).json({
                message: "Email verified successfully",
                success: true,
                error: false
            });
        }

        // OTP is incorrect
        if (!isCodeValid) {
            return res.status(400).json({
                message: "Invalid OTP",
                success: false,
                error: true
            });
        }

        // OTP has expired
        return res.status(400).json({
            message: "OTP expired",
            success: false,
            error: true
        });

    } catch (error) {
        console.error("Verify email error:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


/*
========================================================
3. LOGIN USER
========================================================

Flow:

Email + Password
       ↓
Find User
       ↓
Check Status
       ↓
Compare Password
       ↓
Generate Access Token
       ↓
Generate Refresh Token
       ↓
Save Refresh Token
       ↓
Set Cookies
       ↓
Login successful
*/
export async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not registered",
                success: false,
                error: true
            });
        }

        // Check whether account is active
        if (user.status !== "Active") {
            return res.status(400).json({
                message: "Connect with help desk!",
                success: false,
                error: true
            });
        }
        if (user.verify_email !== true) {
            return res.status(400).json({
                message: "Please verify your email yet please verify your email first",
                success: false,
                error: true
            });
        }

        /*
        Compare:

        Password entered by user
                    ↓
                bcrypt.compare()
                    ↓
        Hashed password in database
        */
        const checkPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!checkPassword) {
            return res.status(401).json({
                message: "Email or password incorrect",
                success: false,
                error: true
            });
        }

        /*
        Generate Access Token

        Used for accessing protected APIs.
        */
        const accessToken = await generatedAccessToken(user._id);

        /*
        Generate Refresh Token

        Used to generate a new access token
        when the access token expires.
        */
        const refreshToken =
            await generatedRefreshToken(user._id);

        /*
        Save refresh token in database.

        IMPORTANT:
        Your generatedRefreshToken function should ideally
        save the refresh token in the user document itself.
        */

        await UserModel.findByIdAndUpdate(user._id, {
            last_login_date: new Date()
        });

        /*
        Cookie configuration.

        httpOnly:
        JavaScript cannot access this cookie directly.

        secure:
        Cookie is sent only over HTTPS.

        sameSite:
        Allows cross-site cookie usage.
        */
        const cookieOption = {
            httpOnly: true,
            // secure: true,
            sameSite: "None"
        };

        /*
        Store tokens in browser cookies.
        */
        res.cookie(
            "accessToken",
            accessToken,
            cookieOption
        );

        res.cookie(
            "refreshToken",
            refreshToken,
            cookieOption
        );

        /*
        Send response.

        We DON'T need to send the tokens in JSON
        because they are already stored in HTTP-only cookies.
        */
        return res.status(200).json({
            message: "Login successfully",
            success: true,
            error: false
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


/*
========================================================
4. LOGOUT USER
========================================================

Flow:

Logout request
      ↓
Middleware identifies user
      ↓
Clear access token cookie
      ↓
Clear refresh token cookie
      ↓
Remove refresh token from DB
      ↓
Logout successful
*/
export async function logoutController(req, res) {
    try {
        /*
        req.userId should be created by authentication
        middleware.

        Example middleware:

        req.userId = decoded.id;
        */
        const userId = req.userId;

        /*
        Cookie options should match the options
        used while creating the cookies.
        */
        const cookieOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        };

        /*
        Delete cookies from browser.
        */
        res.clearCookie("accessToken", cookieOption);
        res.clearCookie("refreshToken", cookieOption);

        /*
        Remove refresh token from database.
        */
        await UserModel.findByIdAndUpdate(userId, {
            refresh_token: ""
        });

        return res.status(200).json({
            message: "Logout successfully",
            success: true,
            error: false
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}


//IMAGE uploader controller


var imagesArr = [];

export async function userAvatarController(req, res) {
    try {
        imagesArr = [];

        const userId = req.userId; // auth middleware
        const images = req.files;

        // Check userId
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized",
                error: true,
                success: false
            });
        }

        // Find user
        const user = await UserModel.findOne({ _id: userId });

        // Check user before using user.avatar
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        // Check uploaded image
        if (!images || images.length === 0) {
            return res.status(400).json({
                message: "Please upload an image",
                error: true,
                success: false
            });
        }

        /*
         * Upload new image first.
         * This is safer because if the new upload fails,
         * the old avatar is still available.
         */
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: false
        };

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.uploader.upload(
                images[i].path,
                options
            );

            imagesArr.push(result.secure_url);

            // Delete image from local uploads folder
            await fs.promises.unlink(images[i].path);

            // console.log("Uploaded:", result.secure_url);
            // console.log("Local filename:", images[i].filename);
        }

        /*
         * Save old avatar before replacing it
         */
        const oldAvatar = user.avatar;

        // Update avatar
        user.avatar = imagesArr[0];

        await user.save();

        /*
         * Delete old avatar from Cloudinary
         * only after new avatar is successfully uploaded and saved.
         */
        if (oldAvatar) {
            try {
                const urlArr = oldAvatar.split("/");
                const avatarImage = urlArr[urlArr.length - 1];

                const imageName = avatarImage.substring(
                    0,
                    avatarImage.lastIndexOf(".")
                );

                console.log("Old Public ID:", imageName);

                const response = await cloudinary.uploader.destroy(
                    imageName
                );

                console.log("Old image delete:", response);
            } catch (deleteError) {
                console.error(
                    "Old avatar delete error:",
                    deleteError
                );
            }
        }

        return res.status(200).json({
            _id: userId,
            avatar: imagesArr[0],
            message: "Avatar updated successfully",
            success: true,
            error: false
        });

    } catch (error) {
        console.error("Avatar upload error:", error);

        return res.status(500).json({
            message: error.message || "Something went wrong",
            error: true,
            success: false
        });
    }
}

export async function removeImageFromCloudinary(req, res) {
    try {
        const imgUrl = req.query.img;
        if (!imgUrl) {
            return res.status(400).json({
                message: "Image URL is required"
            });
        }
        const urlArr = imgUrl.split("/");
        const image = urlArr[urlArr.length - 1];
        const imageName = image.substring(
            0,
            image.lastIndexOf(".")
        );
        // console.log("Public ID:", imageName);
        const response = await cloudinary.uploader.destroy(imageName);
        // console.log("Cloudinary response:", response);
        return res.status(200).json(response);
    } catch (error) {
        console.log("Delete error:", error);
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

//user detail update

export async function updateUserDetails(req, res) {
    try {
        const userId = req.userId;
        const { name, email, mobile, password } = req.body;
        const userExist = await UserModel.findById(userId);
        if (!userExist) {
            return res.status(400).send("User can not be updated!")
        }
        let verifyCode = "";
        if (email !== userExist.email) {
            verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        }
        let hashPassword = "";
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashPassword = await bcrypt.hash(password, salt);
        } else {
            hashPassword = userExist.password;
        }

        const updateUser = await UserModel.findByIdAndUpdate(userId, {
            name: name,
            mobile: mobile,
            email: email,
            verify_email: email !== userExist.email ? false : true,
            password: hashPassword,
            otp: verifyCode !== "" ? verifyCode : null,
            otpExpires: verifyCode !== "" ? Date.now() + 600000 : '',
        }, { new: true })

        if (email !== userExist.email) {
            //send verification emial
            await sendEmailFun({
                sendTo: email,
                subject: "Verify email from Ecommerce App!",
                text: "",
                html: VerifyEmailTemplate(name, verifyCode)
            })
        }
        return res.json({
            message: "user updated successfully",
            error: false,
            success: true,
            user: updateUser
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}


//forget password
export async function forgetPasswordController(req, res) {
    try {
        const { email } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Email not available",
                success: false,
                error: true
            });
        }

        // Generate 6-digit OTP
        const verifyCode = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        // Save OTP
        user.otp = verifyCode;
        user.otpExpires = Date.now() + 600000;

        await user.save();

        // Send email
        await sendEmailFun(
            email,
            "Verify email from Ecommerce App!",
            "",
            VerifyEmailTemplate(user.name, verifyCode)
        );

        return res.json({
            message: "Please check your email",
            error: false,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: true,
            success: false
        });
    }
}


export async function verifyForgotPasswordOtp(req, res) {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            res.status(400).json({
                message: "please provide required field email & OTP",
                error: true,
                success: false
            })
        }
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            res.status(400).json({
                message: "Email is incorrect",
                error: true,
                success: false
            })
        }
        if (otp !== user.otp) {
            res.status(400).json({
                message: "Invalid OTP",
                error: true,
                success: false
            })
        }

        const currentTime = new Date().toISOString();
        if (user.otpExpires < currentTime) {
            res.status(400).json({
                message: "OTP Expired",
                error: true,
                success: false
            })
        }

        user.otp = "";
        user.otpExpires = "";
        await user.save();




        res.status(200).json({
            message: "Verify OTP successfully",
            error: false,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


export async function resetPasswordController(req, res) {
    try {
        const { email, newPassword, confirmPassword } = req.body;

        // 1. Validate required fields
        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).json({
                message: "Please provide required fields: email, newPassword & confirmPassword",
                error: true,
                success: false
            });
        }

        // 2. Find user
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Email is incorrect",
                error: true,
                success: false
            });
        }

        // 3. Check password confirmation
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                message: "newPassword and confirmPassword must be same",
                error: true,
                success: false
            });
        }

        // 4. Generate salt
        const salt = await bcrypt.genSalt(10);

        // 5. Hash new password
        const hashPassword = await bcrypt.hash(newPassword, salt);

        // 6. Update password
        user.password = hashPassword;
        await user.save();


        // 7. Success response
        return res.status(200).json({
            message: "Password updated successfully",
            error: false,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


//refresh token controller

export async function refreshTokenController(req, res) {
    try {
        const refreshToken =
            req.cookies?.refreshToken ||
            req.headers?.authorization?.split(" ")[1];

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token is required",
                error: true,
                success: false
            });
        }

        const verifyToken = jwt.verify(
            refreshToken,
            process.env.SECRET_KEY_REFRESH_TOKEN
        );

        const userId = verifyToken?._id;

        if (!userId) {
            return res.status(401).json({
                message: "Invalid refresh token",
                error: true,
                success: false
            });
        }

        const newAccessToken = generatedAccessToken(userId);

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        };

        res.cookie(
            "accessToken",
            newAccessToken,
            cookiesOption
        );

        return res.status(200).json({
            message: "New AccessToken generated",
            error: false,
            success: true,
            data: {
                accessToken: newAccessToken
            }
        });

    } catch (error) {

        if (
            error.name === "TokenExpiredError" ||
            error.name === "JsonWebTokenError"
        ) {
            return res.status(401).json({
                message: "Invalid or expired refresh token",
                error: true,
                success: false
            });
        }

        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


//user get 
export async function userDetailsController(req,res){
    try{
        const userId = req.userId;
        const user = await UserModel.findById(userId).select('-password -refresh_token');
        return res.json({
            message:"user details",
            data:user,
            error:false,
            success:true
        });
    }catch (error){
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}
