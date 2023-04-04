const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string().required(), 
  email: Joi.string().email().required(),
  phone: Joi.string().required(), 
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addContactSchema,
  updateFavoriteSchema,
};