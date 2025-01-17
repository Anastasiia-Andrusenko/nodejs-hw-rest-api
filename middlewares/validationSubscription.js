

const validationSubscription = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  }
}

module.exports = validationSubscription;