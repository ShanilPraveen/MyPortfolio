const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/',async (req,res)=>{
    const { name, email, subject,message } = req.body;
    //console.log(req.body);

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from:`"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: subject || "New Contact From Portfolio",
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,

        });
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
})

module.exports = router;