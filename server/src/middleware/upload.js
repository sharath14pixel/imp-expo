const multer = require('multer');
const path = require('path');

// Configure multer storage
// For now storing in memory to upload to Cloudinary later
const storage = multer.memoryStorage();

// Check file type
const fileFilter = (req, file, cb) => {
  const filetypes = /pdf|doc|docx/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Error: Resumes must be PDF, DOC, or DOCX'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, // 5MB limit
  fileFilter,
});

module.exports = upload;
