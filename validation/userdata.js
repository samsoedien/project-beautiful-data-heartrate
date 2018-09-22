const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRecipeInput(data) {
  let errors = {};

  data.mood = !isEmpty(data.mood) ? data.mood : '';

  if (Validator.isEmpty(data.mood)) {
    errors.mood = 'Mood is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
