import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';


const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        email: "",
        password: ""
    });
    const context = useContext(MyContext);
    const navigate = useNavigate();

const forgetPassword = async () => {
    // ============================
    // Get email safely
    // ============================
    const email = formFields.email?.trim();

    // ============================
    // Email validation
    // ============================
    if (!email) {
        context.openAlertBox(
            "error",
            "Please enter your email"
        );
        return;
    }

    try {
        // ============================
        // Send forgot password request
        // ============================
        const res = await postData(
            "/api/user/forgot-password",
            {
                email: email
            }
        );

        // console.log("Forgot Password Response:", res);

        // ============================
        // Success
        // ============================
        if (res?.error === false) {

            // Save email only after OTP is successfully sent
            localStorage.setItem(
                "userEmail",
                email
            );

            localStorage.setItem(
                "actionType",
                "forgotPassword"
            );

            context.openAlertBox(
                "success",
                res.message || "OTP sent successfully"
            );

            navigate("/verify");

        }

        // ============================
        // Backend error
        // ============================
        else {

            context.openAlertBox(
                "error",
                res?.message ||
                "Unable to send OTP"
            );
        }

    } catch (error) {

        console.error(
            "Forgot password error:",
            error
        );

        context.openAlertBox(
            "error",
            error?.message ||
            "Something went wrong. Please try again."
        );
    }
};



const handleSubmit = (e) => {
    e.preventDefault();

    if (!formFields.email || !formFields.password) {
        context.openAlertBox(
            "error",
            "Please fill in all required fields."
        );
        return;
    }

    setIsLoading(true);

    postData("/api/user/login", formFields,{withCredentials: true})
        .then((res) => {
            // console.log("Login successful:", res);

            if (res.success) {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);

                context.openAlertBox("success", res.message);
                context.setIsLogin(true);
                navigate("/");
            } else {
                context.openAlertBox("error", res.message);
            }
        })
        .catch((error) => {
            console.error("Login error:", error);

            context.openAlertBox(
                "error",
                error.message || "Login failed"
            );
        })
        .finally(() => {
            setIsLoading(false);
        });
};

    return (
        <>
            <section className="section py-10">
                <div className="container">
                    <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 flex flex-col items-center">
                        <h3 className="text-center text-[17px] text-black font-[600]">
                            Login to your account
                        </h3>
                        <form className="w-[100%] mt-6" onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="form-group w-full">
                                <TextField
                                    id="outlined-email"
                                    type="email"
                                    label="Email *"
                                    name="email"
                                    value={formFields.email}
                                    onChange={(e) =>
                                        setFormFields({
                                            ...formFields,
                                            email: e.target.value
                                        })
                                    }
                                    variant="outlined"
                                    className="w-full"
                                />
                            </div>

                            {/* Password */}
                            <div className="form-group w-full relative">
                                <TextField
                                    id="outlined-password"
                                    label="Password *"
                                    type={
                                        isShowPassword
                                            ? "text"
                                            : "password"
                                    }
                                    variant="outlined"
                                    className="w-full"
                                    name="password"
                                    value={formFields.password}
                                    onChange={(e) =>
                                        setFormFields({
                                            ...formFields,
                                            password: e.target.value
                                        })
                                    }
                                />

                                <Button
                                    type="button"
                                    className="!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                                    onClick={() =>
                                        setIsShowPassword(!isShowPassword)
                                    }
                                >
                                    {isShowPassword ? (
                                        <LuEye className="text-[19px] !opacity-75" />
                                    ) : (
                                        <LuEyeClosed className="text-[19px] !opacity-75" />
                                    )}
                                </Button>

                            </div>

                            {/* Forgot Password */}
                            <a
                                className="link cursor-pointer text-[12px] font-[600]"
                                onClick={forgetPassword}
                            >
                                Forget Password?
                            </a>

                            {/* Login */}
                            <div className="flex items-center w-full mb-2">

                                <Button type="submit" className="btn-org btn-lg w-full">
                                    {isLoading ? (
                                        <CircularProgress size={24} color="inherit" />
                                    ) : (
                                        "Login"
                                    )}
                                </Button>

                            </div>

                            {/* Register */}
                            <p className="!text-[12px] text-center">
                                Not Registered?
                                <Link
                                    className="link font-[600] text-[#ff5252]"
                                    to="/register"
                                >
                                    {" "}Sign Up
                                </Link>
                            </p>

                            {/* Social Login */}
                            <p className="text-[12px] font-[500] text-center mb-3">
                                Or Continue with social accounts
                            </p>

                            <Button
                                className="flex gap-3 w-full font-upp btn-lg !text-black !bg-[#f1f1f1] !font-[500]"
                            >
                                <FcGoogle className="text-[19px]" />
                                Sign in with Google
                            </Button>

                        </form>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Login;