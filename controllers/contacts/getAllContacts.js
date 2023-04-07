
const Contact = require('../../models/contact');


const getAllContacts = async (req, res) => {
  const contactsList = await Contact.find();
  res.json(contactsList);
}

module.exports = getAllContacts;