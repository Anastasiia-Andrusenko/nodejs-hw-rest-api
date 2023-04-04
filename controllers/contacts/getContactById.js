
const contacts = require("../../models/contacts");

const { HttpError } = require('../../helpers');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);
  if (!contact) {
    throw HttpError(404);
  }
  res.json(contact);
};

module.exports = getContactById;