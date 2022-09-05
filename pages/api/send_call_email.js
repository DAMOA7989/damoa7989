import nodemailer from "nodemailer";

export default function handler(req, res) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_GOOGLE_MAIL,
            pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
        },
    });

    const message = {
        from: process.env.NEXT_PUBLIC_GOOGLE_MAIL,
        to: process.env.NEXT_PUBLIC_GOOGLE_MAIL,
        subject: req.body.subject,
        html: `
        ${req.body.firstName}<br/>
        ${req.body.lastName}<br/>
        ${req.body.email}<br/>
        ${req.body.company}<br/>
        ${req.body.region}<br/>
        ${req.body.about}<br/>
        ${req.body.message}<br/>
        `,
    };

    transporter.sendMail(message, (err) => {
        if (err) res.status(500).json({ success: false });
        else res.status(200).json({ success: true });
    });
}
