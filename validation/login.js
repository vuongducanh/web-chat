const Joi = require('joi')

module.exports = function validateLogin(account) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  }

  return Joi.validate(account, schema)
}
