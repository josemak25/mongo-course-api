import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  amount: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('course', courseSchema);
