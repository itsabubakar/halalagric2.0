require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const app = express()
const path = require('path')

const itemRoutes = require('./routes/itemsRoute')
const PORT = process.env.PORT || 8000


connectDB()
app.use(express.json())

// routes
app.use('/api/allitems', itemRoutes)

// * Serve static assets in production, must be at this location of this file

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'dist')))
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))

})

mongoose.connection.on('error', err => {
    console.log(err)
})