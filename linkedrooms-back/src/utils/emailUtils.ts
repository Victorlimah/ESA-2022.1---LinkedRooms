import { User } from './../models/dataDto.js';
import dotenv from "dotenv";
import { MailService } from "@sendgrid/mail";
dotenv.config();

export function sendEmail(userData: User) {
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
    to: email,
    from: process.env.EMAILSENDLER,
    subject: 'Código de autorização LinkedRooms',
    text: `Seu código de autenticação é: ${code}`,
    html: `<h2>Seu código de autenticação é: ${code}<h2>`,
  };
  

  if (msg.to.includes('dcx.ufpb.br')) {
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    })
  } else {
    throw {type: "unauthorized", message: "email inválido"};
  };
}

export function processUserName(email: string) {
  const atLocation = email.indexOf("@");
  const dotLocation = email.indexOf(".");

  const unseparatedName = email.slice(0, atLocation);
  let separatedName = unseparatedName.replace(".", " ");
  
  const processedName = separatedName[0].toUpperCase() + separatedName.slice(1, dotLocation + 1)  + 
    separatedName[dotLocation + 1].toUpperCase() + separatedName.slice(dotLocation + 2);

  return processedName;
}