const Joi = require('joi')

module.exports = function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    name: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(3).max(255).required()
  }

  return Joi.validate(user, schema)
}
