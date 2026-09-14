import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendEmail(to, subject, text, html) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to,
            subject,
            text,
            html,
        });

        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error) {
        console.error("Email sending error:", error);

        return {
            success: false,
            message: error.message,
        };
    }
}

export default sendEmail;