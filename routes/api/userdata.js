const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys');

// Validation
const validateUserdataInput = require('../../validation/userdata');

// Load Heartdata schema model
const User = require('../../models/User')

// GET route api/userdata/test
router.get('/test', (req, res, next) => res.json({ message: 'User data route works' }));

// GET route api/userdata
router.get('/', (req, res, next) => {
  User.find()
    .sort({ date: -1 })
    .exec()
    .then(userdata => res.status(200).json(userdata))
    .catch(err => res.status(404).json({
      message: 'No userdatafound'
    }));
});

// POST route api/heartrate
router.post('/', (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUserdata = new User({
    _id: new mongoose.Types.ObjectId(),
    mood: req.body.mood
  });
  newUserdata.save().then(userdata => res.status(201).json(userdata));
});


module.exports = router;
