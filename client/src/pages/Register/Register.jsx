import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { postData } from '../../utils/api';
import { MyContext } from '../../App';
import { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: ""
    });
    const context = useContext(MyContext);
    const navigate = useNavigate();

    const onChangeinput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }
    const validValue = Object.values(formFields).every((value) => value.trim() !== "");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!formFields.name || !formFields.email || !formFields.password) {
        context.openAlertBox(
            "error",
            "Please fill in all required fields."
        );
        return;
    }

    setIsLoading(true);

    postData("/api/user/register", formFields)
        .then((res) => {
            if (res.success) {
                context.openAlertBox("success", res.message);
                localStorage.setItem("userEmail", formFields.email);
                navigate("/verify", { state: { email: formFields.email } });
            } else {
                context.openAlertBox("error", res.message);
            }
        })
        .catch((error) => {
            console.error("Registration error:", error);

            context.openAlertBox(
                "error",
                error.message || "Registration failed"
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
                    <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 flex flex-col  items-center">
                        <h3 className="text-center text-[17px] text-black font-[600]">Register new account</h3>

                        <form action="" className="w-[100%] mt-6" onSubmit={handleSubmit}>
                            <div className="form-group w-full ">
                                <TextField id="outlined-basic"
                                    type="name"
                                    name="name"
                                    value={formFields.name}
                                    disabled={isLoading === true ? true : false}
                                    label="Full Name *"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeinput}
                                />
                            </div>
                            <div className="form-group w-full ">
                                <TextField id="outlined-basic"
                                    type="email"
                                    label="Email *"
                                    value={formFields.email}
                                    disabled={isLoading === true ? true : false}
                                    name="email"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeinput}
                                />
                            </div>
                            <div className="form-group w-full relative">
                                <TextField id="outlined-basic"
                                    label="Password *"
                                    name="password"
                                    type={isShowPassword === false ? 'password' : 'text'}
                                    variant="outlined"
                                    value={formFields.password}
                                    disabled={isLoading === true ? true : false}
                                    className="w-full"
                                    onChange={onChangeinput}
                                />
                                <Button className="!absolute top-[10px] right-[5px] z-50 !w-[35px]
                        !h-[35px] !min-w-[35px] !rounded-full !text-black" onClick={() => setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword === false ? (
                                            <LuEyeClosed className="text-[19px] !opacity-75" />
                                        ) : (
                                            <LuEye className="text-[19px] !opacity-75" />
                                        )
                                    }
                                </Button>
                            </div>
                            <div className="flex items-center w-full mb-2">
                                <Button className="btn-org btn-lg w-full" disabled={!validValue} type="submit">
                                    {isLoading ? <CircularProgress size={23} color="inherit" /> : "Register"}
                                </Button>
                            </div>
                            <p className='!text-[12px] text-center'>Already have an account?<Link className="link font-[600] text-[#ff5252]" to={"/login"}>Login</Link></p>
                            <p className="text-[12px] font-[500] text-center mb-3">Or Continue with social accounts</p>
                            <Button className="flex gap-3 w-full font-upp btn-lg !text-black !bg-[#f1f1f1] !font-[500]"><FcGoogle className="text-[19px]" />Sign in with Google</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
