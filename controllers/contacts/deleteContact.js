const contacts = require("../../models/contacts");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  res.status(200).json({ "message": "contact deleted" });
};

module.exports = deleteContact;