import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [isShowPassword,setIsShowPassword] = useState(false);

    return (
        <>
        <section className="section py-10">
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 flex flex-col  items-center">
                    <h3 className="text-center text-[17px] text-black font-[600]">Register new account</h3>

                    <form action="" className="w-[100%] mt-6">
                        <div className="form-group w-full ">
                        <TextField id="outlined-basic" 
                        type="name"
                        label="Full Name *"
                        variant="outlined"
                        className="w-full"
                        />
                        </div>
                        <div className="form-group w-full ">
                        <TextField id="outlined-basic" 
                        type="email"
                        label="Email *"
                        variant="outlined"
                        className="w-full"
                        />
                        </div>
                        <div className="form-group w-full relative">
                        <TextField id="outlined-basic" 
                        label="Password *"
                        type={isShowPassword === false ? 'password': 'text'}
                        variant="outlined"
                        className="w-full"
                        />
                        <Button className="!absolute top-[10px] right-[5px] z-50 !w-[35px]
                        !h-[35px] !min-w-[35px] !rounded-full !text-black" onClick={()=>setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === false ? (
                            <LuEyeClosed className="text-[19px] !opacity-75"/>
                                ) : (
                            <LuEye className="text-[19px] !opacity-75"/>
                                )
                            }
                        </Button>
                        </div>
                        <div className="flex items-center w-full mb-2">
                            <Button className="btn-org btn-lg w-full">Register</Button>
                        </div>
                        
                        <p className='!text-[12px] text-center'>Already have an account?<Link className="link font-[600] text-[#ff5252]" to={"/login"}>Login</Link></p>
                        <p className="text-[12px] font-[500] text-center mb-3">Or Continue with social accounts</p>
                        <Button className="flex gap-3 w-full font-upp btn-lg !text-black !bg-[#f1f1f1] !font-[500]"><FcGoogle className="text-[19px]"/>Sign in with Google</Button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Register
