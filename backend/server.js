const express = require('express')

//express app
const app = express()

//listening for request
app.listen(4000, () => {
    console.log('listening on port 4000')
})