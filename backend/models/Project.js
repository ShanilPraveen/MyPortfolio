const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title : {type : String,required : true},
    description : {type : String,required : true},
    imageUrl : String,
    githubUrl : String,
    techStack : [String]
});

module.exports = mongoose.model('Project',projectSchema);