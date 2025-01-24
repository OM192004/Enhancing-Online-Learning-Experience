const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Course description is required'],
      trim: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
      },
    ],
    content: [
      {
        title: { type: String, required: true },
        type: { type: String, enum: ['video', 'quiz', 'article'], required: true },
        url: { type: String }, 
        duration: { type: Number }, 
        questions: [
          {
            questionText: { type: String },
            options: [{ type: String }],
            correctAnswer: { type: String },
          },
        ], 
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [{ type: String }], 
    duration: {
      type: Number, 
      required: true,
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    price: {
      type: Number,
      default: 0, // Free by default
    },
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    averageRating: {
      type: Number,
      default: 0, 
    },
    thumbnail: {
      type: String, 
      default: '',
    },
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
