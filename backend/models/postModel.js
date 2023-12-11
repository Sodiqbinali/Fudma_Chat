const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    desc: {
        type: String, 
        required : true
    },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    }
}, { timestamps: true })

module.exports = mongoose.model('Posts', postSchema)