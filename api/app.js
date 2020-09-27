const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys')

const app = express()

mongoose
  .connect(keys.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected....'))
  .catch((error) => console.error(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

module.exports = app
