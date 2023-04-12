//Implement a MongoDB schema for a blog post that includes fields for the title, author, content, and publication date of the post. The schema should also include validation to ensure that the title and content fields are not empty.
//Ans:- 
const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  publicationDate: {
    type: Date,
    default: Date.now
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
