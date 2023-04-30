const Joi = require('joi');
// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const subscriptioniList = ['starter', 'pro', 'business'];

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(4).required(),
  subscription: Joi.string().valid(...subscriptioniList),
});

const verificationEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({'any.required':  "missing required field email"}),
})

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(4).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptioniList).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  verificationEmailSchema
};