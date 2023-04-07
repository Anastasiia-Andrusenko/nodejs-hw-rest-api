
const { addContactSchema, updateFavoriteSchema } = require('./contacts');

const contactSchemaMongoose = require('./contactSchemaMongoose');

module.exports = {
  addContactSchema,
  updateFavoriteSchema,
  contactSchemaMongoose,
}