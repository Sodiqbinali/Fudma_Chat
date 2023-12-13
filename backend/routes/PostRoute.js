const express = require('express')
const { createPost, getPost } = require('../controllers/PostController')

const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', ()=>{})
router.delete('/:id', ()=>{})
router.put('/:id/like', ()=>{})
router.get('/:id/timeline', ()=>{})

module.exports = router