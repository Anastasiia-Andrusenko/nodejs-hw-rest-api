
const User = require('../../models/user');

const { HttpError } = require('../../helpers');

const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    throw HttpError(409, "Email in use");
  };

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({...req.body, password: hashPassword});

  res.status(201).json({
    user: {
      email: user.email,
      // password: user.password,
      subscription: user.subscription,
    }
  })
};


module.exports = register;
