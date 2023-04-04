const contacts = require("../../models/contacts");

const { HttpError } = require('../../helpers');

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json({ "message": "contact deleted" });
};

module.exports = deleteContact;