const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')

const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const passportStrategy = require('./middleware/passport-strategy')

const app = express()

mongoose
  .connect(keys.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected....'))
  .catch((error) => console.error(error))

app.use(passport.initialize())
passport.use('passportStrategy')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoutes)

module.exports = app
