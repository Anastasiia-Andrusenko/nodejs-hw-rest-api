const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidUserId = (req, res, next) => {
  const { userId } = req.params;
  // console.log(userId);
  if (!isValidObjectId(userId)) {
    next(HttpError(404, 'Not found'))
  }

  next();
}

module.exports = isValidUserId;