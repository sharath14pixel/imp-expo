const express = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const upload = require('../middleware/upload');
const { applyForJob } = require('../controllers/careers.controller');
const validate = require('../middleware/validate');

const router = express.Router();

const applyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: { success: false, message: 'Too many applications from this IP, please try again after an hour' }
});

router
  .route('/apply')
  .post(
    applyLimiter,
    upload.single('resume'),
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Please include a valid email'),
      body('role').notEmpty().withMessage('Role applied for is required'),
    ],
    validate,
    applyForJob
  );

module.exports = router;
