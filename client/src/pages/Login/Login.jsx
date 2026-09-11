import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../App';

const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const [formFields, setFormFields] = useState({
        email: "",
        password: ""
    });

    
    const context = useContext(MyContext);

    const navigate = useNavigate();

    const forgetPassword = () => {

        if (formFields.email.trim() !== "") {

            navigate("/verify");

            context.openAlertBox(
                "success",
                "OTP sent successfully"
            );

        } else {

            context.openAlertBox(
                "error",
                "Please enter your email"
            );

        }
    };

    return (
        <>
            <section className="section py-10">
                <div className="container">

                    <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 flex flex-col items-center">

                        <h3 className="text-center text-[17px] text-black font-[600]">
                            Login to your account
                        </h3>

                        <form className="w-[100%] mt-6">

                            {/* Email */}
                            <div className="form-group w-full">

                                <TextField
                                    id="outlined-email"
                                    type="email"
                                    label="Email *"
                                    variant="outlined"
                                    className="w-full"
                                    name="email"
                                    value={formFields.email}
                                    onChange={(e) =>
                                        setFormFields({
                                            ...formFields,
                                            email: e.target.value
                                        })
                                    }
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

                                <Button className="btn-org btn-lg w-full">
                                    Login
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