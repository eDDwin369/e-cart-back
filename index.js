//load   .env file content to process.env by default

require('dotenv').config()

const express = require('express')

const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')


//create expresss server
const server = express()


//use packages to server
server.use(cors())
server.use(express.json())
server.use(router)


//crete port where server should listen
const PORT = process.env.port || 3000


//run server
server.listen(PORT, () => {
    console.log(`e-cart server started at ${PORT}`);
})


//resolve get request to localhost 3000
server.get('/', (req, res) => {
    res.status(200).json("e cart server started")
})