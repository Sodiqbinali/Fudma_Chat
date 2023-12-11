require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const postRouter = require('./routes/PostRoute')


//express app
const app = express()

//middleware
app.use(express.json())

//routes
app.use('/api/posts', postRouter)

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
    //listening for request
        app.listen(process.env.PORT, () => {
        console.log(`connected to DB & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
