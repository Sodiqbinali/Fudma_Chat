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
      const post = await Post.findById(id);
      if (post.userId === userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post updated!");
      } else {
        res.status(403).json("Authentication failed");
      }
    } catch (error) {}
  };

//delete a post
const deletePost = async (req, res) => {
  const {id} = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);
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

// like/dislike a post
const likePost = async (req, res) => {
  const {id} = req.params;
  const { userId } = req.body;
  try {
    const post = await Post.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get timeline posts
const getTimelinePosts = async (req, res) => {
  const {id} = req.params
  try {
    const currentUserPosts = await Post.find({ userId: id });

    const followingPosts = await UserModel.aggregate([
      { 
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost,
    likePost,
    getTimelinePosts
}