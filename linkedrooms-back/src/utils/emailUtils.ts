import { User } from './../models/dataDto';
import dotenv from "dotenv";
import { MailService } from "@sendgrid/mail";
dotenv.config();

export default function sendEmail(userData: User) {
  const emailData = {
    email: userData.email,
    code: userData.code
  };

  sendAuthenticationEmail(emailData);
}

export function sendAuthenticationEmail({
  email,
  code
}) {
  const sgMail = new MailService();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email, // Change to your recipient
    from: process.env.EMAILSENDLER, // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: `Seu código de autenticação é: ${code}`,
    html: '<button>and easy to do anywhere, even with Node.js />',
  };
  console.log(msg);

  if (msg.to.includes('dcx.ufpb.br')) {
    sgMail
      .send(msg)
      .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  } else {
    console.log("Email inválido! Tente usar um email dcx!");
  };
}