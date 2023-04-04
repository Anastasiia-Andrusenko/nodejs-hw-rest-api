const contacts = require("../../models/contacts");

const { HttpError } = require('../../helpers');

const updateContactById = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, 'Missing fields');
  }
  const { contactId } = req.params;
  const updateContact = await contacts.updateContact(contactId, req.body);
  if (!updateContact) {
    throw HttpError(404);
  }
  res.json(updateContact);
};

module.exports = updateContactById;