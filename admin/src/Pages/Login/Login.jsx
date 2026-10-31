
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiLogin } from "react-icons/hi"
import { FaUser } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { IoIosEye, IoIosEyeOff } from "react-icons/io"

const Login = () => {
    const [loadingGoogle, setLoadingGoogle] = useState(false)
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    function handleClickGoogle() {
        setLoadingGoogle(true)
    }

    return (
        <section className="min-h-screen w-full bg-[#f7f7f8] flex items-center justify-center px-4 py-10">

            {/* Header */}
            <header className="w-full absolute top-0 left-0 px-6 md:px-12 py-5 flex items-center justify-end gap-3">
                <NavLink to="/login">
                    <Button className="!rounded-full !text-black !capitalize !px-5">
                        <HiLogin className="mr-2 rotate-180" />
                        Login
                    </Button>
                </NavLink>

                <NavLink to="/signup">
                    <Button className="!rounded-full !text-black !capitalize !px-5">
                        <FaUser className="mr-2 text-xs" />
                        Sign Up
                    </Button>
                </NavLink>
            </header>

            {/* Login Card */}
            <div className="w-full max-w-[440px] bg-white rounded-3xl p-7 sm:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.07)] border border-gray-100">

                {/* Heading */}
                <div className="text-center mb-8">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-black flex items-center justify-center mb-5">
                        <HiLogin className="text-white text-2xl rotate-180" />
                    </div>

                    <h1 className="text-3xl sm:text-[34px] font-bold text-[#171717] tracking-tight">
                        Welcome Back!
                    </h1>

                    <p className="text-gray-500 text-sm mt-2">
                        Sign in with your credentials.
                    </p>
                </div>

                {/* Google Login */}
                <Button
                    onClick={handleClickGoogle}
                    disabled={loadingGoogle}
                    fullWidth
                    endIcon={<FcGoogle className="text-xl" />}
                    variant="outlined"
                    className="!h-[50px] !rounded-xl !normal-case !text-gray-800 !border-gray-200 hover:!bg-gray-50 !font-medium"
                >
                    {loadingGoogle ? 'Connecting...' : 'Sign in with Google'}
                </Button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-7">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400">
                        Or, Sign in with your email
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Form */}
                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Email
                        </h4>

                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full h-[48px] rounded-xl border border-gray-200 px-4 text-sm outline-none transition-all focus:border-black focus:ring-2 focus:ring-black/5"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </h4>

                        <div className="relative">
                            <input
                                type={isPasswordShown ? "text" : "password"}
                                required
                                placeholder="Enter your password"
                                className="w-full h-[48px] rounded-xl border border-gray-200 px-4 pr-12 text-sm outline-none transition-all focus:border-black focus:ring-2 focus:ring-black/5"
                            />

                            <button
                                type="button"
                                onClick={() => setIsPasswordShown(!isPasswordShown)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                            >
                                {isPasswordShown
                                    ? <IoIosEye className="text-xl" />
                                    : <IoIosEyeOff className="text-xl" />
                                }
                            </button>
                        </div>
                    </div>

                    {/* Remember / Forgot */}
                    <div className="flex items-center justify-between flex-wrap gap-2">

                        <FormControlLabel
                            control={<Checkbox defaultChecked size="small" />}
                            label={
                                <span className="text-sm text-gray-600">
                                    Remember me
                                </span>
                            }
                        />

                        <Link
                            to="/forgot-password"
                            className="text-sm text-gray-500 hover:text-black transition-colors"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        fullWidth
                        className="!h-[50px] !rounded-xl !bg-black hover:!bg-[#292929] !text-white !capitalize !font-semibold !shadow-none !transition-all"
                    >
                        Sign in
                    </Button>

                </form>
            </div>
        </section>
    )
}

export default Login
