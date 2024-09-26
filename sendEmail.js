import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const sendRegistrationEmail = async (receiver) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: receiver,
      subject: "TEST",
      html: `
        <h1>Test Header!</h1>
        <p> Test text </p>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};