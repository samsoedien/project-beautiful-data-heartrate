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
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .exec()
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// // POST route api/users
// router.post("/", (req, res, next) => {
//   const newUser = new User({
//     _id: new mongoose.Types.ObjectId()
//   });
//   newUser.save().then(user => res.status(201).json(user)); // added 201 status
// });

// POST route api/weatherdata
router.post("/:id/weatherdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(req.params.id)
    .then(result => {
      const newWeatherdata = {
        temperature: req.body.temperature
      };
      result.weatherdata.unshift(newWeatherdata);
      result.save().then(user => res.status(201).json(user));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/drowsinessdata
router.post("/:id/drowsinessdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(req.params.id)
    .then(result => {
      const newDrowsinessdata = {
        correctAnswers: req.body.correctAnswers,
        wrongAnswers: req.body.wrongAnswers,
        totalTime: req.body.totalTime
      };
      result.drowsinessdata.unshift(newDrowsinessdata);
      result.save().then(user => res.status(201).json(user));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/stressdata
router.post("/:id/stressdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(req.params.id)
    .then(result => {
      const newStressdata = {
        emotion: req.body.emotion,
        experience: req.body.experience,
        activity: req.body.activity
      };
      result.stressdata.unshift(newStressdata);
      result.save().then(user => res.status(201).json(user));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// POST route api/heartdata
router.post("/:id/heartdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(req.params.id)
    .then(result => {
      const newHeartdata = {
        bpm: req.body.bpm
      };
      result.heartdata.unshift(newHeartdata);
      result.save().then(user => res.status(201).json(user));
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

module.exports = router;
