const User = require('../../models/user');

const path = require('path');

const fs = require('fs/promises');
const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, filename } = req.file;

  const resultUpload = path.join(avatarsDir, filename); 
  
  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, {avatarURL})

  console.log(avatarURL);
  res.json({ avatarURL: avatarURL, });
};

module.exports = updateAvatar;