
const User = require('../../models/user');

const { HttpError } = require('../../helpers');

const updateSubscription = async (req, res) => {
  const user = req.user._id.toString();

  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, 'Missing fields');
  }

  const { userId } = req.params;

  if (user !== userId) {
    throw HttpError(403, 'You are not authorized to update this user');
  }

  const updateUser = await User.findByIdAndUpdate(user, req.body, { new: true });
  if (!updateUser) {
    throw HttpError(404);
  }

  res.json({
    user: {
      email: updateUser.email,
      subscription: updateUser.subscription
    }
  });
};



module.exports = updateSubscription;