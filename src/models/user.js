'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const userSchema = new Schema ({
  firstName : String,
  lastName: String,
  email: String,
  cars: [{
    type: Schema.Types.ObjectId,
    ref: 'car'
  }]
})

module.exports = mongoose.model('user', userSchema)
