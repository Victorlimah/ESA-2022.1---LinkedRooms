import dotenv from "dotenv";
import { MailService } from "@sendgrid/mail";
dotenv.config();

export default function sendEmail(email: String) {
  const sgMail = new MailService();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email, // Change to your recipient
    from: 'linkedrooms0@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<button>and easy to do anywhere, even with Node.js />',
  }

  send(msg);  
}

function send(msg) {
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
    console.log("Email inválido! Tente usar um email dcx");
  }
}

