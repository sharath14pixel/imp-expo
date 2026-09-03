const express = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const upload = require('../middleware/upload');
const { applyForJob, getApplications } = require('../controllers/careers.controller');
const validate = require('../middleware/validate');

const router = express.Router();

// Rate limiting
const applyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 requests per windowMs
  message: 'Too many applications from this IP, please try again after an hour'
});

router
  .route('/apply')
  .post(
    applyLimiter,
    upload.single('resume'),
    [
      body('jobId').notEmpty().withMessage('Job ID is required'),
      body('fullName').notEmpty().withMessage('Full name is required'),
      body('email').isEmail().withMessage('Please include a valid email'),
      body('phone').notEmpty().withMessage('Phone number is required'),
    ],
    validate,
    applyForJob
  );

router.get('/applications', getApplications);

module.exports = router;
