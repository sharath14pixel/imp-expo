const nodemailer = require('nodemailer');
const env = require('../config/env');

const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like SendGrid, Mailgun etc
    auth: {
      user: env.emailUser,
      pass: env.emailPass,
    },
  });

  // Define email options
  const mailOptions = {
    from: `Imp & Expo <${env.emailUser}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
