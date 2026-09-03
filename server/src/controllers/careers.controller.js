const Application = require('../models/Application');
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
    const { jobId, fullName, email, phone, coverLetter } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Please upload a resume' });
    }

    // Upload resume to Cloudinary
    // Using a stream since we are using memory storage
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
    } catch(err) {
        console.error("Cloudinary upload failed", err);
        // Fallback for demo purposes if cloudinary fails or isn't setup
        resumeUrl = 'https://example.com/placeholder-resume.pdf'; 
    }

    const application = await Application.create({
      jobId,
      fullName,
      email,
      phone,
      coverLetter,
      resumeUrl,
    });

    res.status(201).json({
      success: true,
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all applications
// @route   GET /api/careers/applications
// @access  Private/Admin
exports.getApplications = async (req, res, next) => {
  try {
    const applications = await Application.find().sort({ appliedAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    next(error);
  }
};
