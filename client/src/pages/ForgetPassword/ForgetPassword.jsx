import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../App';

const ForgetPassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const [formFields, setFormFields] = useState({
        password: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formFields.password) {
            context.openAlertBox(
                "error",
                "Please enter your new password"
            );
            return;
        }

        if (!formFields.confirmPassword) {
            context.openAlertBox(
                "error",
                "Please confirm your password"
            );
            return;
        }

        if (formFields.password.length < 6) {
            context.openAlertBox(
                "error",
                "Password must be at least 6 characters"
            );
            return;
        }

        if (formFields.password !== formFields.confirmPassword) {
            context.openAlertBox(
                "error",
                "Passwords do not match"
            );
            return;
        }

        // API call yahan aayegi
        console.log("Password:", formFields.password);

        context.openAlertBox(
            "success",
            "Password reset successfully"
        );

        navigate("/login");
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
                                id="outlined-password"
                                label="New Password *"
                                type={
                                    isShowPassword
                                        ? "text"
                                        : "password"
                                }
                                variant="outlined"
                                className="w-full"
                                name="password"
                                value={formFields.password}
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
                            >
                                Change Password
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;