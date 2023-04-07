
const { model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { contactSchemaMongoose } = require('../schemas');

contactSchemaMongoose.post('save', handleMongooseError);

const Contact = model('contact', contactSchemaMongoose);

module.exports = Contact;