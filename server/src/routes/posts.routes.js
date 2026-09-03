const express = require('express');
const { body } = require('express-validator');
const { getPosts, getPostBySlug, createPost } = require('../controllers/posts.controller');
const validate = require('../middleware/validate');

const router = express.Router();

router
  .route('/')
  .get(getPosts)
  .post(
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('slug').notEmpty().withMessage('Slug is required'),
      body('excerpt').notEmpty().withMessage('Excerpt is required'),
      body('content').notEmpty().withMessage('Content is required'),
    ],
    validate,
    createPost
  );

router
  .route('/:slug')
  .get(getPostBySlug);

module.exports = router;
