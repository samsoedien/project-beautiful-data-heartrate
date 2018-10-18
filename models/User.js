const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  weatherdata: [
    {
      temperature: {
        type: Number,
        required: true
      },
      humidity: {
        type: Number,
        required: true
      },
      lightDensity: {
        type: Number,
        required: true
      },
      sound: {
        type: Number,
        required: true
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
      reactionTime: {
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
        type: String,
        required: true
      },
      experience: {
        type: Number
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
        type: Number,
        required: true
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
