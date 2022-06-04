import { transporter } from "../config/email.js";
import "dotenv/config"


export const sendForm = async (email) => {
    const mailOptions = {
        from: 'gfourtestes@mail.ee',
        to: `${email} `,
        subject: 'G-four Questionario',
        html: `<h2> </h2>
        <p>Questionario:<p><br> <strong> 
        <a src="https://docs.google.com/forms/d/e/1FAIpQLSdkixgHOEei409YNLik5_Qppxqo4DSrhIjfTfLkHNb_3nnyMw/viewform?usp=sf_link">link </a> </strong>`,
    };
    transporter.sendForm(mailOptions, (err, info) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}