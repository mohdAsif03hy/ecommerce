import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';

const ForgetPassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const [formFields, setFormFields] = useState({
        email: localStorage.getItem("userEmail"),
        newPassword: "",
        confirmPassword: ""
    });

    const context = useContext(MyContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    };


const handleSubmit = async (e) => {
    e.preventDefault();

    // ==============================
    // Get values
    // ==============================
    const email = localStorage.getItem("userEmail");
    const newPassword = formFields.newPassword;
    const confirmPassword = formFields.confirmPassword;

    // ==============================
    // Email validation
    // ==============================
    if (!email) {
        context.openAlertBox(
            "error",
            "Email not found. Please restart the forgot password process."
        );

        navigate("/forgot-password");
        return;
    }

    // ==============================
    // New password validation
    // ==============================
    if (!newPassword) {
        context.openAlertBox(
            "error",
            "Please enter your new password"
        );
        return;
    }

    // ==============================
    // Confirm password validation
    // ==============================
    if (!confirmPassword) {
        context.openAlertBox(
            "error",
            "Please confirm your password"
        );
        return;
    }

    // ==============================
    // Password length
    // ==============================
    if (newPassword.length < 6) {
        context.openAlertBox(
            "error",
            "Password must be at least 6 characters"
        );
        return;
    }

    // ==============================
    // Password match
    // ==============================
    if (newPassword !== confirmPassword) {
        context.openAlertBox(
            "error",
            "Passwords do not match"
        );
        return;
    }

    // ==============================
    // API payload
    // ==============================
    const payload = {
        email: email,
        newPassword: newPassword,
        confirmPassword: confirmPassword
    };

    // console.log("Reset Password Payload:", payload);

    // ==============================
    // API call
    // ==============================
    try {
        const res = await postData(
            "/api/user/reset-password",
            payload
        );

        // console.log("Reset Password Response:", res);

        if (res?.error === false) {

            context.openAlertBox(
                "success",
                res.message || "Password reset successfully"
            );

            // Remove forgot-password data
            localStorage.removeItem("userEmail");
            localStorage.removeItem("actionType");

            // Go to login
            navigate("/login");

        } else {

            context.openAlertBox(
                "error",
                res?.message || "Failed to reset password"
            );
        }

    } catch (error) {

        console.error(
            "Reset password error:",
            error
        );

        context.openAlertBox(
            "error",
            error?.message || "Something went wrong"
        );
    }
};



return (
    <section className="section py-10">
        <div className="container">
            <div className="
                    card
                    shadow-md
                    w-[400px]
                    max-w-full
                    m-auto
                    rounded-md
                    bg-white
                    p-5
                    px-10
                    flex
                    flex-col
                    items-center
                ">
                {/* Heading */}
                <h3 className="
                        text-center
                        text-[17px]
                        text-black
                        font-[600]
                    ">
                    Forgot Password
                </h3>
                {/* <p className="
                        text-center
                        text-[12px]
                        text-gray-500
                        mt-2
                        mb-2
                    ">
                        Enter your new password and confirm it
                        below.
                    </p> */}
                <form
                    className="w-full mt-5"
                    onSubmit={handleSubmit}
                >
                    {/* New Password */}
                    <div className="form-group w-full relative">
                        <TextField
                            id="outlined-new-password"
                            label="New Password *"
                            type={
                                isShowPassword
                                    ? "text"
                                    : "password"
                            }
                            variant="outlined"
                            className="w-full"
                            name="newPassword"
                            value={formFields.newPassword}
                            disabled={context.isLoading === true ? true : false}
                            onChange={handleChange}
                        />
                        <Button
                            type="button"
                            className="
                                    !absolute
                                    top-[10px]
                                    right-[5px]
                                    z-50
                                    !w-[35px]
                                    !h-[35px]
                                    !min-w-[35px]
                                    !rounded-full
                                    !text-black
                                "
                            onClick={() =>
                                setIsShowPassword(
                                    !isShowPassword
                                )
                            }
                        >
                            {isShowPassword ? (
                                <LuEye
                                    className="
                                            text-[19px]
                                            !opacity-75
                                        "
                                />
                            ) : (
                                <LuEyeClosed
                                    className="
                                            text-[19px]
                                            !opacity-75
                                        "
                                />
                            )}
                        </Button>
                    </div>
                    {/* Confirm Password */}
                    <div className="
                            form-group
                            w-full
                            relative
                            mt-4
                        ">
                        <TextField
                            id="outlined-confirm-password"
                            label="Confirm Password *"
                            type={
                                isShowConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            variant="outlined"
                            className="w-full"
                            name="confirmPassword"
                            value={
                                formFields.confirmPassword
                            }
                            disabled={context.isLoading === true ? true : false}
                            onChange={handleChange}
                        />
                        <Button
                            type="button"
                            className="
                                    !absolute
                                    top-[10px]
                                    right-[5px]
                                    z-50
                                    !w-[35px]
                                    !h-[35px]
                                    !min-w-[35px]
                                    !rounded-full
                                    !text-black
                                "
                            onClick={() =>
                                setIsShowConfirmPassword(
                                    !isShowConfirmPassword
                                )
                            }
                        >
                            {isShowConfirmPassword ? (
                                <LuEye
                                    className="
                                            text-[19px]
                                            !opacity-75
                                        "
                                />
                            ) : (
                                <LuEyeClosed
                                    className="
                                            text-[19px]
                                            !opacity-75
                                        "
                                />
                            )}
                        </Button>
                    </div>
                    {/* Reset Button */}
                    <div className="
                            flex
                            items-center
                            w-full
                            mt-5
                        ">
                        <Button
                            type="submit"
                            className="
                                    btn-org
                                    btn-lg
                                    w-full
                                "
                        >{
                                context.isLoading === true ? <CircularProgress size={24} className="text-white" /> : "Change Password"
                            }
                            
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);
};

export default ForgetPassword;