const express = require('express')
const Post = require('../models/PostModel')

const router = express.Router()

router.post('/', async (req, res)=>{
    const {userId, desc} = req.body

    try {
        const newPost = await Post.create({userId, desc})
        res.status(200).json(newPost)
    }   catch (error){
        res.status(400).json({error: error.message})
    }
})
router.get('/:id', ()=>{})
router.put('/:id', ()=>{})
router.delete('/:id', ()=>{})
router.put('/:id/like', ()=>{})
router.get('/:id/timeline', ()=>{})

module.exports = router