const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
    profilePicture: {
      type: String, 
      default: '',
    },
    bio: {
      type: String,
      trim: true,
    },
    coursesEnrolled: [
      {
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
        progress: { type: Number, default: 0 }, 
      },
    ],
    coursesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
    badges: [
      {
        badgeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Badge' },
        earnedAt: { type: Date, default: Date.now },
      },
    ],
    accessibilitySettings: {
      fontSize: { type: String, default: 'medium' }, 
      darkMode: { type: Boolean, default: false },
    },
    activityLogs: [
      {
        activityType: { type: String, enum: ['course', 'quiz', 'forum'], required: true },
        activityDescription: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
