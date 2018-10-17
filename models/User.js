const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bpm: {
    type: Number,
    required: true
  },
  stressdata: [
    {
      bmp: {
        type: Number,
        required: true
      },
      ibi: {
        type: Number
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = User = mongoose.model("User", UserSchema);
