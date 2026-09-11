import { useState } from "react";
import OtpBox from "../../components/OtpBox/OtpBox"
import Button from "@mui/material/Button";

const Verify = () => {
    const [otp, setOtp] = useState("");

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


    const verifyOTP =(e)=>{
        e.preventDefault();
        alert(otp);
    }
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
                            <p className="text-center text-[11px] mb-2">OTP send to <span className="text-[#ff5252] text-[11px] font-[500] ">mohdasif70568@gmail.com</span></p>

                        <form onSubmite={verifyOTP} action="">

                            <OtpBox
                                length={6}
                                onChange={(value) => setOtp(value)}
                                onComplete={(value) => {
                                    console.log("OTP:", value);
                                }}
                                onResend={() => {
                                    console.log("Resend OTP");
                                }}
                            />

                            <div className="flex mt-2 w-full items-center justify-center ">
                                <Button type="submite" className="w-full btn-org btn-lg">
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
