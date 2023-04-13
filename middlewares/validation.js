const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const path = error.details[0].path;
      error.message = `missing required ${path} field`;
      error.status = 400;
      next(error);
    }
    next();
  }
}

const validationFavorite = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.message = 'missing field favorite';
      error.status = 400;
      next(error);
    }
    next();
  }
}

const validationUser = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
    }
    next();
  }
}

module.exports = {
  validation,
  validationFavorite,
  validationUser
};