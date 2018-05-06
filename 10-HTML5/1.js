const express = require('express')
const path = require('path')

const server = express()
server.listen(8081)
console.log('open http://localhost:8081')

server.use(express.static(path.join(__dirname, '.')))