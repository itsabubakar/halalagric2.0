require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const app = express()
const itemRoutes = require('./routes/itemsRoute')
const PORT = process.env.PORT || 8000


connectDB()
app.use(express.json())

// routes
app.get("/", (req, res) => {
    res.send("Server is running")
})

app.use('/api/allitems', itemRoutes)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))

})

mongoose.connection.on('error', err => {
    console.log(err)
})