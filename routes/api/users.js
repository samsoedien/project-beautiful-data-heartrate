const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const keys = require("../../config/keys");

// Validation
const validateUserdataInput = require("../../validation/userdata");

// Load Heartdata schema model
const User = require("../../models/User");

// GET route api/users/test
router.get("/test", (req, res, next) =>
  res.json({ message: "User data route works" })
);

// GET route api/users
router.get("/", (req, res, next) => {
  User.find()
    .sort({ date: -1 })
    .exec()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res.status(404).json({
        message: "No users found"
      })
    );
});

// GET route api/users/:id
router.get("/:userId", (req, res, next) => {
  User.findOne({ userId: req.params.userId })
    .exec()
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/users
router.post("/", (req, res, next) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    userId: req.body.userId
  });
  newUser.save().then(user => res.status(201).json(user)); // added 201 status
});

// POST route api/weatherdata
router.post("/:userId/weatherdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ userId: req.params.userId })
    .then(user => {
      const newWeatherdata = {
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        lightDensity: req.body.lightDensity,
        sound: req.body.sound
      };
      user.weatherdata.unshift(newWeatherdata);
      user.save().then(user => res.status(201).json(user));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/drowsinessdata
router.post("/:userId/drowsinessdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ userId: req.params.userId })
    .then(user => {
      const newDrowsinessdata = {
        correctAnswers: req.body.correctAnswers,
        wrongAnswers: req.body.wrongAnswers,
        totalTime: req.body.totalTime
      };
      user.drowsinessdata.unshift(newDrowsinessdata);
      user.save().then(result => res.status(201).json(result));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/stressdata
router.post("/:userId//stressdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ userId: req.params.userId })
    .then(user => {
      const newStressdata = {
        emotion: req.body.emotion,
        experience: req.body.experience,
        activity: req.body.activity
      };
      user.stressdata.unshift(newStressdata);
      user.save().then(result => res.status(201).json(result));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/heartdata
router.post("/:userId/heartdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ userId: req.params.userId })
    .then(user => {
      const newHeartdata = {
        bpm: req.body.bpm
      };
      user.heartdata.unshift(newHeartdata);
      user.save().then(result => res.status(201).json(result));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

module.exports = router;
