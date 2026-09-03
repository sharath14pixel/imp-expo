const express = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { submitContact, getContacts } = require('../controllers/contact.controller');
const validate = require('../middleware/validate');

const router = express.Router();

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many contact requests from this IP, please try again after 15 minutes'
});

router
  .route('/')
  .post(
    contactLimiter,
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Please include a valid email'),
      body('subject').notEmpty().withMessage('Subject is required'),
      body('message').notEmpty().withMessage('Message is required'),
    ],
    validate,
    submitContact
  )
  .get(getContacts); // Should ideally be protected by auth middleware

module.exports = router;
