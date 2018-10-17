const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRecipeInput(data) {
  let errors = {};

  data.bpm = !isEmpty(data.bpm) ? data.bpm : "";

  if (Validator.isEmpty(data.bpm)) {
    errors.bpm = "BPM is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
