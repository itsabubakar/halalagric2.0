require('dotenv').config()
const { MongoClient } = require('mongodb');

const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 8000


connectDB()
app.use(express.json())

// routes
app.get("/", (req, res) => {
    res.send("Server is running")
})


// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.DATABASE_URL

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("halalAgric");
        const items = database.collection("items")

        // create an array of documents to insert
        const docs = [
            { price: 600, name: 'Tomato', desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem', category: 'Groceries' },
            { price: 600, name: 'Carrots', desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem', category: 'Fresh food' },
            { price: 600, name: 'Apple', desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem', category: 'Fresh food' },
        ]

        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };

        const result = await items.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}


mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
    run().catch(console.dir);

    console.log('Connection to database succesful')
})

mongoose.connection.on('error', err => {
    console.log(err)
})