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

module.exports = validation;