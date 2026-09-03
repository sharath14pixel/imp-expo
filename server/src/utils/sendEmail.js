const { Resend } = require('resend');
const env = require('../config/env');

const resend = new Resend(env.resendApiKey);

const sendEmail = async (options) => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Update with a verified domain in prod
      to: options.email,
      subject: options.subject,
      html: options.html,
      text: options.message,
    });
    console.log('Email sent:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendEmail;
