import { useEffect, useRef, useState } from "react";

const OtpBox = ({
    length = 6,
    onChange,
    onComplete,
    // onResend,
    loading = false,
}) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const [error, setError] = useState("");
    const [timer, setTimer] = useState(30);

    const inputRefs = useRef([]);

    // -----------------------------
    // Reset OTP when length changes
    // -----------------------------
    useEffect(() => {
        setOtp(Array(length).fill(""));
    }, [length]);

    // -----------------------------
    // OTP Timer
    // -----------------------------
    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    // -----------------------------
    // Update OTP
    // -----------------------------
    const updateOtp = (newOtp) => {
        setOtp(newOtp);

        // Parent ko OTP value bhejo
        onChange?.(newOtp.join(""));
    };

    // -----------------------------
    // Handle Input
    // -----------------------------
    const handleChange = (value, index) => {
        // Only numbers
        if (!/^\d*$/.test(value)) return;

        setError("");

        const newOtp = [...otp];

        // Only one digit
        newOtp[index] = value.slice(-1);

        updateOtp(newOtp);

        // Move to next input
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // OTP completed
        if (
            newOtp.every((digit) => digit !== "") &&
            newOtp.join("").length === length
        ) {
            onComplete?.(newOtp.join(""));
        }
    };

    // -----------------------------
    // Backspace + Arrow Keys
    // -----------------------------
    const handleKeyDown = (e, index) => {

        // Backspace
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }

        // Left arrow
        if (
            e.key === "ArrowLeft" &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }

        // Right arrow
        if (
            e.key === "ArrowRight" &&
            index < length - 1
        ) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // -----------------------------
    // Paste OTP
    // -----------------------------
    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, length);

        if (!pastedData) return;

        const newOtp = Array(length).fill("");

        pastedData.split("").forEach((digit, index) => {
            newOtp[index] = digit;
        });

        updateOtp(newOtp);
        setError("");

        const nextIndex = Math.min(
            pastedData.length,
            length - 1
        );

        inputRefs.current[nextIndex]?.focus();

        // Complete OTP
        if (pastedData.length === length) {
            onComplete?.(pastedData);
        }
    };

  
    return (
        <div className="w-full max-w-md mx-auto">

            {/* OTP Inputs */}
            <div
                className="flex justify-center gap-1 sm:gap-1"
                onPaste={handlePaste}
            >
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        disabled={loading}
                        autoComplete={
                            index === 0
                                ? "one-time-code"
                                : "off"
                        }
                        onChange={(e) =>
                            handleChange(
                                e.target.value,
                                index
                            )
                        }
                        onKeyDown={(e) =>
                            handleKeyDown(e, index)
                        }
                        aria-label={`OTP digit ${index + 1}`}
                        className={`
                            w-11 h-12
                            sm:w-12 sm:h-14
                            text-center
                            text-lg
                            sm:text-xl
                            font-semibold
                            rounded-xl
                            border-2
                            outline-none
                            transition-all
                            duration-200
                            bg-white
                            text-gray-900
                            ${error
                                ? "border-red-500 focus:ring-4 focus:ring-red-100"
                                : "border-gray-200 focus:border-[#ff5252] focus:ring-4 focus:ring-[#ff5252]/10"
                            }
                            hover:border-gray-300
                            disabled:bg-gray-100
                            disabled:cursor-not-allowed
                        `}
                    />
                ))}
            </div>

            {/* Error */}
            {error && (
                <p className="mt-3 text-center text-sm text-red-500">
                    {error}
                </p>
            )}

            {/* Verify Button */}
            {/* <button
                type="button"
                disabled={loading}
                onClick={handleVerify}
                className="
                    mt-6
                    w-full
                    h-11

                    rounded-xl

                    bg-[#ff5252]
                    hover:bg-[#e64545]

                    text-white
                    font-semibold

                    transition-all
                    duration-200

                    active:scale-[0.98]

                    disabled:opacity-60
                    disabled:cursor-not-allowed
                "
            >
                {loading ? "Verifying..." : "Verify OTP"}
            </button> */}

            {/* Resend */}
            {/* <div className="mt-5 text-center">

                {timer > 0 ? (
                    <p className="text-sm text-gray-500">
                        Resend OTP in{" "}
                        <span className="font-semibold text-gray-800">
                            {timer}s
                        </span>
                    </p>
                ) : (
                    <button
                        type="button"
                        disabled={loading}
                        onClick={handleResend}
                        className="
                            text-sm
                            font-semibold
                            text-[#ff5252]

                            hover:underline

                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        Resend OTP
                    </button>
                )}

            </div> */}
        </div>
    );
};

export default OtpBox;