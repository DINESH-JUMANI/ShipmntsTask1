const express = require('express');
const { uploadFile, saveDataToDB } = require('../controllers/fileUploadController');
const multer = require('multer');

// Configure multer with file size limit (e.g., 5 MB)
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

// Initialize the Express Router
const router = express.Router();

// Route to handle file upload with file size limit
router.post('/upload', upload.single('file'), (req, res, next) => {
  // Check if file is uploaded
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded or file size exceeds the limit' });
  }
  next();
}, uploadFile);

// Route to save data to the database
router.post('/save', saveDataToDB);

// Export the router
module.exports = router;
