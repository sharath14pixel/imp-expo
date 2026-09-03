const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['News', 'Insights', 'Company Updates', 'Press Release'],
  },
  tags: {
    type: [String],
  },
  imageUrl: {
    type: String,
    default: 'no-photo.jpg',
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);
