const CourseFile = require('../models/CourseFile');

// Create Course File
exports.createCourseFile = async (req, res) => {
  try {
    const courseFile = new CourseFile({ ...req.body, createdBy: req.user.id });
    await courseFile.save();
    res.status(201).json(courseFile);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course file' });
  }
};

// Get All Course Files
exports.getCourseFiles = async (req, res) => {
  try {
    const courseFiles = await CourseFile.find({ createdBy: req.user.id });
    res.json(courseFiles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course files' });
  }
};
