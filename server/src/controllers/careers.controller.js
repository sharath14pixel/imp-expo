const Application = require('../models/Application');
const sendEmail = require('../utils/sendEmail');
const cloudinary = require('cloudinary').v2;
const env = require('../config/env');

// Configure Cloudinary
cloudinary.config({
  cloud_name: env.cloudinaryCloudName,
  api_key: env.cloudinaryApiKey,
  api_secret: env.cloudinaryApiSecret,
});

// @desc    Submit a job application
// @route   POST /api/careers/apply
// @access  Public
exports.applyForJob = async (req, res, next) => {
  try {
    const { name, email, role, message } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors: { resume: 'Please upload a resume' } });
    }

    const uploadToCloudinary = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'resumes', resource_type: 'raw' },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        stream.end(buffer);
      });
    };

    let resumeUrl = '';
    try {
      const result = await uploadToCloudinary(req.file.buffer);
      resumeUrl = result.secure_url;
    } catch (err) {
      console.error("Cloudinary upload failed", err);
      resumeUrl = 'https://example.com/placeholder-resume.pdf'; 
    }

    const application = await Application.create({
      name,
      email,
      role,
      message,
      resumeUrl,
    });

    try {
      await sendEmail({
        email: 'your_verified_email@example.com', // Admin email
        subject: `New Job Application: ${role}`,
        html: `<p><strong>${name}</strong> (${email}) has applied for the <strong>${role}</strong> role.</p>
               <p><strong>Message:</strong><br/>${message || 'N/A'}</p>
               <p><strong>Resume:</strong> <a href="${resumeUrl}">View Resume</a></p>`,
      });
    } catch (err) {
      console.error('Failed to send notification email', err);
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application,
    });
  } catch (error) {
    next(error);
  }
};
