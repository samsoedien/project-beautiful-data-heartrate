const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys');

// Validation
const validateHeartdataInput = require('../../validation/heartdata');

// Load Heartdata schema model
const Heart = require('../../models/Heart')

// GET route api/heartdata/test
router.get('/test', (req, res, next) => res.json({ message: 'Heart data route works' }));

// GET route api/heartdata
router.get('/', (req, res, next) => {
  Heart.find()
    .sort({ date: -1 })
    .exec()
    .then(heartdata => res.status(200).json(heartdata))
    .catch(err => res.status(404).json({
      message: 'No heartdatafound'
    }));
});

// POST route api/heartrate
router.post('/', (req, res, next) => {
  const { errors, isValid } = validateHeartdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newHeartdata = new Heart({
    _id: new mongoose.Types.ObjectId(),
    bpm: req.body.bpm
  });
  newHeartdata.save().then(heartdata => res.status(201).json(heartdata));
});


module.exports = router;