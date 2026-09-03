const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');
const env = require('../config/env');

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, company, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      company,
      message,
    });

    try {
      await sendEmail({
        email: 'your_verified_email@example.com', // Admin email to receive notifications
        subject: `New Contact Request from ${name}`,
        html: `<p>You have received a new message from <strong>${name}</strong> (${email}).</p>
               <p><strong>Company:</strong> ${company || 'N/A'}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
      });
    } catch (err) {
      console.error('Failed to send notification email', err);
    }

    res.status(201).json({
      success: true,
      message: 'Contact request submitted successfully',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};
