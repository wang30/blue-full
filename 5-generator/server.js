const express = require('express')
const static = require('express-static')

const server = express()

server.use('/', static('./'))

server.listen(8081)