const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRecipeInput(data) {
  let errors = {};

  data.emotion = !isEmpty(data.emotion) ? data.emotion : '';

  if (Validator.isEmpty(data.emotion)) {
    errors.emotion = 'Emotion is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
