const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Please add a slug'],
    unique: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: [true, 'Please add an excerpt'],
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
  },
  tag: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    default: 'no-photo.jpg',
  }
});

module.exports = mongoose.model('Post', PostSchema);
