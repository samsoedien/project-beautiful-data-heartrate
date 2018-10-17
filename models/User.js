const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  weatherdata: [
    {
      temperature: {
        type: Number
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ],
  drowsinessdata: [
    {
      correctAnswers: {
        type: Number,
        required: true
      },
      wrongAnswers: {
        type: Number,
        required: true
      },
      totalTime: {
        type: Number,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ],
  stressdata: [
    {
      emotion: {
        type: String
      },
      experience: {
        type: String
      },
      activity: {
        type: String
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ],
  heartdata: [
    {
      bpm: {
        type: Number
      },
      ibi: {
        type: Number
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = User = mongoose.model("User", UserSchema);
