"use server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function onMailer({
  email,
  subject,
  html,
}: {
  email?: string;
  subject: string;
  html: string;
}) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODE_MAILER_EMAIL,
    to: email || process.env.NODE_MAILER_EMAIL,
    subject: subject || "Email from your app",
    html: html,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return { message: "Email sent" };
  } catch (err) {
    return { error: err };
  }
}
