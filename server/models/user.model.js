'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  user_id : {type: String},
  username : {type: String},
  email: {type: String, unique: true},
  password: {type: String}
})


useSchema.plugin(passportLocalMongoose) // it can read local strategy now
module.exports = mongoose.model('User', userSchema)
