const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const router = express.Router();


router.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    const hashed = await bcrypt.hash(password,10);
    const newAdmin = new Admin({
        username,
        password : hashed
    });
    await newAdmin.save();
    res.json({message : 'Admin registered successfully'});
});

router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const admin  = await Admin.findOne({username});
        if(!admin){
            return res.status(400).json({message : 'Invalid credentials'});
        };

        const validPass = await bcrypt.compare(password,admin.password);
        if(!validPass){
            return res.status(400).json({message : 'Invalid credentials'});
        };  

        const token = jwt.sign({id:admin._id},process.env.JWT_SECRET,{expiresIn : '1h'});
        res.json({token});

    } catch(err){
        res.status(500).json({message : 'Server error'});
    }
    
});

module.exports = router;