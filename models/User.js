const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  emotion: {
    type: String,
    required: true
  },
  mood: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('User', UserSchema);