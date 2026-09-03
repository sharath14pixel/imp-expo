const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');
const env = require('../config/env');

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, company, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      company,
      subject,
      message,
    });

    // Optionally send email notification to admin
    /*
    await sendEmail({
      email: env.emailUser,
      subject: `New Contact Request: ${subject}`,
      message: `You have received a new message from ${name} (${email}).\n\nCompany: ${company}\nMessage:\n${message}`,
    });
    */

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};
