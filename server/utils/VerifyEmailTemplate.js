
const VerifyEmailTemplate = (name, verificationCode) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
</head>

<body style="
    margin: 0;
    padding: 0;
    background-color: #f3f6fb;
    font-family: Arial, Helvetica, sans-serif;
">

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background-color: #f3f6fb; padding: 40px 15px;">

        <tr>
            <td align="center">

                <!-- Main Card -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="
                        max-width: 560px;
                        background-color: #ffffff;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    ">

                    // <!-- Header -->
                    <tr>
                        <td align="center"
                            style="
                                background-color: #2563eb;
                                padding: 32px 20px;
                            ">

                            <div style="
                                width: 54px;
                                height: 54px;
                                line-height: 54px;
                                background-color: rgba(255,255,255,0.15);
                                border-radius: 50%;
                                margin: 0 auto 15px;
                                font-size: 26px;
                            ">
                                🔐
                            </div>

                            <h1 style="
                                margin: 0;
                                color: #ffffff;
                                font-size: 26px;
                                font-weight: 700;
                            ">
                                Verify Your Email
                            </h1>

                            <p style="
                                margin: 10px 0 0;
                                color: #dbeafe;
                                font-size: 14px;
                            ">
                                Secure verification for your account
                            </p>

                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="
                            padding: 35px 30px;
                            color: #1f2937;
                        ">

                            <h2 style="
                                margin: 0 0 15px;
                                font-size: 21px;
                                font-weight: 600;
                            ">
                                Hello ${name || "User"} 👋
                            </h2>

                            <p style="
                                margin: 0 0 20px;
                                font-size: 15px;
                                line-height: 1.7;
                                color: #4b5563;
                            ">
                                We received a request to verify your email
                                address. Please use the verification code below
                                to continue.
                            </p>

                            <!-- OTP Box -->
                            <div style="
                                margin: 30px 0;
                                padding: 25px 15px;
                                background-color: #f8fafc;
                                border: 1px solid #e5e7eb;
                                border-radius: 12px;
                                text-align: center;
                            ">

                                <p style="
                                    margin: 0 0 12px;
                                    font-size: 12px;
                                    font-weight: 600;
                                    letter-spacing: 1px;
                                    text-transform: uppercase;
                                    color: #6b7280;
                                ">
                                    Your Verification Code
                                </p>

                                <div style="
                                    font-size: 36px;
                                    line-height: 1.2;
                                    font-weight: 700;
                                    letter-spacing: 10px;
                                    color: #2563eb;
                                    padding-left: 10px;
                                ">
                                    ${verificationCode}
                                </div>

                            </div>

                            <!-- Expiry Notice -->
                            <div style="
                                background-color: #eff6ff;
                                border-left: 4px solid #2563eb;
                                padding: 12px 15px;
                                border-radius: 6px;
                                margin-bottom: 25px;
                            ">
                                <p style="
                                    margin: 0;
                                    font-size: 13px;
                                    line-height: 1.6;
                                    color: #374151;
                                ">
                                    ⏱️ This verification code will expire in
                                    <strong>10 minutes</strong>.
                                </p>
                            </div>

                            <p style="
                                margin: 0 0 15px;
                                font-size: 14px;
                                line-height: 1.6;
                                color: #6b7280;
                            ">
                                For your security, please do not share this
                                verification code with anyone.
                            </p>

                            <p style="
                                margin: 0;
                                font-size: 14px;
                                line-height: 1.6;
                                color: #6b7280;
                            ">
                                If you did not request this verification code,
                                you can safely ignore this email.
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center"
                            style="
                                background-color: #f8fafc;
                                border-top: 1px solid #e5e7eb;
                                padding: 20px;
                            ">

                            <p style="
                                margin: 0 0 6px;
                                font-size: 12px;
                                color: #9ca3af;
                            ">
                                This is an automated email. Please do not reply.
                            </p>

                            <p style="
                                margin: 0;
                                font-size: 12px;
                                color: #9ca3af;
                            ">
                                © ${new Date().getFullYear()} Your App.
                                All rights reserved.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>

    </table>

</body>
</html>
`;
};

export default VerifyEmailTemplate;
