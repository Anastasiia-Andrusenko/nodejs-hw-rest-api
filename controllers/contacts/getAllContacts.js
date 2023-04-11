
const Contact = require('../../models/contact');


const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const filter = { owner };
  if (favorite !== undefined) {
    filter.favorite = favorite;
  }

  const contactsList = await Contact.find(filter, '', {skip, limit});
  res.json(contactsList);
}

module.exports = getAllContacts;


