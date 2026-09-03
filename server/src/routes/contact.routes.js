const express = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { submitContact } = require('../controllers/contact.controller');
const validate = require('../middleware/validate');

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many contact requests from this IP, please try again after 15 minutes' }
});

router
  .route('/')
  .post(
    contactLimiter,
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Please include a valid email'),
      body('message').notEmpty().withMessage('Message is required'),
    ],
    validate,
    submitContact
  );

module.exports = router;
