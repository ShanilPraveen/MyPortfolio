const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const upload = require('../middleware/multer');

router.get('/',async(req,res)=>{
    const projects = await Project.find().sort({_id:-1});
    res.json(projects);
});

router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
      const { title, description, githubUrl, techStack } = req.body;
      const imageUrl = req.file?.path;
  
      const newProject = new Project({
        title,
        description,
        imageUrl,
        githubUrl,
        techStack: techStack ? techStack.split(',') : []
      });
  
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error while uploading project' });
    }
});

router.delete('/:id',auth,async(req,res)=>{
    await Project.findByIdAndDelete(req.params.id);
    res.json({message : 'Project deleted successfully'});
});

module.exports = router;