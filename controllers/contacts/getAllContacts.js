
const contacts = require("../../models/contacts");

const getAllContacts = async (req, res) => {
  const contactsList = await contacts.listContacts();
  res.json(contactsList);
}

module.exports = getAllContacts;