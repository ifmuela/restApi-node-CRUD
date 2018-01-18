'use strict'

const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose')

const app = express()

const userRoutes = require('./routes/user')

// connection DB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/rest-api', {
  useMongoCLient: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err))

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

// routes
app.use('/user', userRoutes)

// static file

// error handlers

// start the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
