const { Schema } = require('mongoose');

const contactSchemaMongoose = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    required: [true, 'Set email of contact'],
  },
  phone: {
    type: String,
    required: [true, 'Set phone of contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = contactSchemaMongoose;