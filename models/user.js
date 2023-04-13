const { model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const { userMongooseSchema } = require('../schemas');

userMongooseSchema.post('save', handleMongooseError);

const User = model('user', userMongooseSchema);

module.exports = User;