const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  heartRate: [
    {
      bmp: {
        type: Number,
        required: true
      },
      ibi: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  userData: [
    {
      emotion: {
        type: String,
        required: true
      },
      mood: {
        type: String
      },
      annotation: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = User = mongoose.model('User', UserSchema);