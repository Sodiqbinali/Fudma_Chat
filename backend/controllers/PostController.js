const Post = require('../models/PostModel')

//Get a post

const getPost = async (req, res)=>{
    const {id} = req.params;

    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json(error);
    }
}

//Create a post

const createPost = async (req, res)=>{
    const {userId, desc} = req.body

    try {
        const newPost = await Post.create({userId, desc})
        res.status(200).json(newPost)
    }   catch (error){
        res.status(400).json({error: error.message})
    }
}

//Update a post

//delete a post

module.exports = {
    createPost,
    getPost
}