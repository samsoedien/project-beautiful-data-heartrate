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
    emotion: req.body.emotion,
    mood: req.body.mood,
  });

  newUserdata.save().then(userdata => res.status(201).json(userdata));
});

router.post('/userdata', (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ user: req.user.id }).then(user => {
    const newUserData = {
      emotion: req.body.emotion,
      activity: req.body.activity
    };

    user.userData.unshift(newUserData);
    user.save().then(user => res.json(user));
  });

});

router.post('/heartdata', (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newHeartData = {
    bmp: req.body.bpm,
    ibi: req.body.ibi,
  };

  user.heartRate.unshift(newHeartData);
  user.save().then(user => res.json(user));
});

module.exports = router;
