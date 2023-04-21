const User = require('../../models/user');
const path = require('path');
const Jimp = require("jimp");

const fs = require('fs/promises');
const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, filename); 
  
  await fs.rename(tempUpload, resultUpload);

  // зміна розміру зображення
  const image = await Jimp.read(resultUpload);
  await image.resize(250, 250);
  await image.writeAsync(resultUpload);

  const avatarURL = path.join("avatars", filename);
  
  await User.findByIdAndUpdate(_id, {avatarURL})

  console.log(avatarURL);
  res.json({ avatarURL: avatarURL, });
};

module.exports = updateAvatar;

