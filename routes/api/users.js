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

// POST route api/user
router.post("/", (req, res, next) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId()
  });
  newUser.save().then(user => res.status(201).json(user)); // added 201 status
});

// POST route api/stressdata
router.post("/stressdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // User.findById(req.params.id)
  //   .populate("user", "_id")
  //   .exec()
  //   .then(user => res.json(user))
  //   .catch(err =>
  //     res.status(404).json({ nouserfound: "No user found with that ID" })
  //   );

  const newStressdata = new User({
    _id: new mongoose.Types.ObjectId(),
    bpm: req.body.bpm
  });

  newStressdata.save().then(stressdata => res.status(201).json(stressdata));
});

router.get("/stressdata", (req, res, next) => {
  User.find()
    .sort({ date: -1 })
    .exec()
    .then(stressdata => res.status(200).json(stressdata))
    .catch(err =>
      res.status(404).json({
        message: "No stressdata found"
      })
    );
});

router.post("/userdata", (req, res, next) => {
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

router.post("/heartdata", (req, res, next) => {
  const { errors, isValid } = validateUserdataInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newHeartData = {
    bmp: req.body.bpm,
    ibi: req.body.ibi
  };

  user.heartRate.unshift(newHeartData);
  user.save().then(user => res.json(user));
});

module.exports = router;
