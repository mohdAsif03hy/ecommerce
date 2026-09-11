import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS,
    },
})
async function sendEmail(to , subject, text, html){
    try {
        const info = await transporter.sendMail({
            from:process.env.EMAIL,
            to,//list to recive
            subject,//subject line 
            text,
            html,
        });
        return { success:true,meesageId:info.messageId};
    } catch (error) {
        
    }
}
export default sendEmail;