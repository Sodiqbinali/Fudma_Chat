require('dotenv').config()

const express = require('express')
const postRouter = require('./routes/PostRoute')

//express app
const app = express()

//routes
app.use(postRouter)

//listening for request
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})