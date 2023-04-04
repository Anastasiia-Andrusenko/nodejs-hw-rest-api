
const Contact = require('../../models/contact');


const getAllContacts = async (req, res) => {
  const contactsList = await Contact.find({}, "-createdAt -updatedAt");
  res.json(contactsList);
}

module.exports = getAllContacts;