const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');
const upload  = require('../middleware/multer');

router.get('/', async (req, res) => {
    const blogs = await Blog.find().sort({ _id: -1 });
    res.json(blogs);
});

router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
      const { title, description } = req.body;
      const imageUrl = req.file?.path;
      console.log(imageUrl);
      const newBlog = new Blog({ title, description, imageUrl });
  
      const savedBlog = await newBlog.save();
      res.status(201).json(savedBlog);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error while uploading blog' });
    }
});

router.delete('/:id', auth, async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
});

module.exports = router;