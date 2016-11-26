'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const useSchema = new Schema({
  user_id : {type: String},
  username : {type: String},
  email: {type: String, unique: true},
  password: {type: String}
})

module.exports = mongoose.model('User', userSchema)
