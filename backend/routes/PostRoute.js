const express = require('express')

const router = express.Router()

router.post('/',()=>{})
router.get('/:id', ()=>{})
router.put('/:id', ()=>{})
router.delete('/:id', ()=>{})
router.put('/:id/like', ()=>{})
router.get('/:id/timeline', ()=>{})

module.exports = router