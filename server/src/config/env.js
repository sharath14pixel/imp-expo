require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  resendApiKey: process.env.RESEND_API_KEY,
  grokApiKey: process.env.GROK_API_KEY,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
};
