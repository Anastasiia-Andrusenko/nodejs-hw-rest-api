
const { addContactSchema, updateFavoriteSchema } = require('./contactsJoiSchema');
const contactSchemaMongoose = require('./contactSchemaMongoose');


const userMongooseSchema = require('./userMongooseSchema');
const { registerSchema, loginSchema, updateSubscriptionSchema, verificationEmailSchema } = require('./userJoiSchema');

module.exports = {
  addContactSchema,
  updateFavoriteSchema,
  contactSchemaMongoose,
  userMongooseSchema,
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  verificationEmailSchema
}