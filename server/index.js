require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()