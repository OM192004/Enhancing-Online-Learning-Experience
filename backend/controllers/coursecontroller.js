const Course = require('../models/Course'); // Assuming the schema is in the models folder
const mongoose = require('mongoose');

// Controller to create a new course
exports.createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      instructor,
      enrolledStudents,
      content,
      category,
      tags,
      duration,
      level,
      price,
      thumbnail,
    } = req.body;

    const course = new Course({
      title,
      description,
      instructor,
      enrolledStudents,
      content,
      category,
      tags,
      duration,
      level,
      price,
      thumbnail,
    });

    await course.save();
    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create course',
      error: error.message,
    });
  }
};

// Controller to edit an existing course
exports.editCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID',
      });
    }

    const updates = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(courseId, updates, {
      new: true, // Return the updated document
      runValidators: true, // Enforce schema validation
    });

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      course: updatedCourse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to update course',
      error: error.message,
    });
  }
};
