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
const updatePost = async (req, res) => {
    const {id} = req.params;
    const { userId } = req.body;
  
    try {
      const post = await PostModel.findById(id);
      if (post.userId === userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post updated!");
      } else {
        res.status(403).json("Authentication failed");
      }
    } catch (error) {}
  };

//delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted.");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
    createPost,
    getPost
}