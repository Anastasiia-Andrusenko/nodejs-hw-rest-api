
const User = require('../../models/user');
const { HttpError, sendEmail } = require('../../helpers');
const bcrypt = require('bcrypt');

const gravatar = require('gravatar');

const { nanoid } = require('nanoid');
require('dotenv').config();
const { BASE_URL } = process.env;

const verificationToken = nanoid();

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    throw HttpError(409, "Email in use");
  };

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email); 

  const user = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}"><b>Click to verify email</b></a>`
  }

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: user.email,
      // password: user.password,
      subscription: user.subscription,
    }
  })
};


module.exports = register;
