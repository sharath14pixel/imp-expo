const express = require('express');
const { body } = require('express-validator');
const { getPosts, getPost, createPost } = require('../controllers/posts.controller');
const validate = require('../middleware/validate');

const router = express.Router();

router
  .route('/')
  .get(getPosts)
  .post(
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('content').notEmpty().withMessage('Content is required'),
      body('author').notEmpty().withMessage('Author is required'),
      body('category').notEmpty().withMessage('Category is required'),
    ],
    validate,
    createPost
  );

router
  .route('/:id')
  .get(getPost);

module.exports = router;
