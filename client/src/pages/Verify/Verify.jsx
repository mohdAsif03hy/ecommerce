import { useContext, useState } from "react";
import OtpBox from "../../components/OtpBox/OtpBox"
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";



const Verify = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const context = useContext(MyContext);

    //  const handleVerify = () => {
    //     const otpValue = otp.join("");

    //     if (otpValue.length !== length) {
    //         setError(
    //             `Please enter the complete ${length}-digit OTP.`
    //         );
    //         return;
    //     }

    //     setError("");

    //     onComplete?.(otpValue);
    // };


      // -----------------------------
    // Resend OTP
    // -----------------------------
    // const handleResend = () => {
    //     if (timer > 0 || loading) return;

    //     setOtp(Array(length).fill(""));
    //     setError("");
    //     setTimer(30);

    //     onChange?.("");

    //     inputRefs.current[0]?.focus();

    //     onResend?.();
    // };




const verifyOTP = async (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem("actionType");
    const userEmail = localStorage.getItem("userEmail");

    // =====================================
    // 1. Check email availability FIRST
    // =====================================
    if (!userEmail) {
        context.openAlertBox(
            "error",
            "Email not found. Please start the verification process again."
        );

        // Forgot password flow
        if (actionType === "forgotPassword") {
            navigate("/forgot-password");
        }

        // Normal registration flow
        else {
            context.openAlertBox(
                "error",
                "Email not found. Please register first."
            );
            navigate("/register");
        }

        return;
    }

    // =====================================
    // 2. Check OTP
    // =====================================
    if (!otp) {
        context.openAlertBox(
            "error",
            "Please enter OTP"
        );

        return;
    }

    // =====================================
    // 3. Normal Email Verification
    // =====================================
    if (actionType !== "forgotPassword") {

        try {

            const res = await postData(
                "/api/user/verifyEmail",
                {
                    email: userEmail,
                    otp: otp
                }
            );

            if (res?.error === false) {

                context.openAlertBox(
                    "success",
                    res.message
                );

                localStorage.removeItem("userEmail");
                localStorage.removeItem("actionType");

                navigate("/");

            } else {

                context.openAlertBox(
                    "error",
                    res?.message || "OTP verification failed"
                );
            }

        } catch (error) {

            console.error(
                "Email verification error:",
                error
            );

            context.openAlertBox(
                "error",
                error?.message ||
                "OTP verification failed"
            );
        }

    }

    // =====================================
    // 4. Forgot Password OTP Verification
    // =====================================
    else {

        try {

            const res = await postData(
                "/api/user/verify-forgot-password-otp",
                {
                    email: userEmail,
                    otp: otp
                }
            );

            if (res?.error === false) {

                context.openAlertBox(
                    "success",
                    res.message
                );

                // IMPORTANT:
                // Don't remove userEmail here.
                // Reset-password page needs it.
                navigate("/forgot-password");

            } else {

                context.openAlertBox(
                    "error",
                    res?.message ||
                    "OTP verification failed"
                );
            }

        } catch (error) {

            console.error(
                "Forgot password OTP error:",
                error
            );

            context.openAlertBox(
                "error",
                error?.message ||
                "OTP verification failed"
            );
        }
    }
};


    return (
        <>
            <section className="section py-10">
                <div className="container">
                    <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 flex flex-col items-center">
                        <div className="text-center flex items-center justify-center px-3">
                            <img src="/password.png" width={60} alt="" />
                        </div>
                        <h3 className="text-center mb-4 mt-0 text-[17px] text-black font-[600] cursor-pointer">
                            Verify OTP
                        </h3>
                            <p className="text-center text-[11px] mb-2">OTP send to <span className="text-[#ff5252] text-[11px] font-[500] ">{localStorage.getItem("userEmail")}</span></p>
                        <form onSubmit={verifyOTP} action="">
                            <OtpBox
                                length={6}
                                onChange={(value) => setOtp(value)}
                                onComplete={(value) => {
                                    // console.log("OTP:", value);
                                }}
                                onResend={() => {
                                    console.log("Resend OTP");
                                }}
                            />

                            <div className="flex mt-2 w-full items-center justify-center ">
                                <Button type="submit" className="w-full btn-org btn-lg">
                                    Verify OTP
                                </Button>
                            </div>
                        </form>




                    </div>

                </div>
            </section>
        </>
    )
}

export default Verify
