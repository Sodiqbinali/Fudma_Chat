require('dotenv').config()

const express = require('express')

//express app
const app = express()

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'homepage'})
})

//listening for request
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})