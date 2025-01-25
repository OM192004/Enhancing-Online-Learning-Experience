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

// Controller to fetch all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name email'); // Adjust fields as necessary
    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch courses',
      error: error.message,
    });
  }
};


// Controller to fetch questions for a specific course
exports.getCourseQuestions = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Fetch course and extract questions
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    // Extract questions from the content array
    const questions = course.content
      .filter((item) => item.type === 'quiz') // Filter only quiz-type content
      .flatMap((item) => item.questions);    // Extract all questions

    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch questions',
      error: error.message,
    });
  }
};
