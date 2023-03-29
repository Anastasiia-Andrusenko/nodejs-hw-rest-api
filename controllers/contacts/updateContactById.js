const contacts = require("../../models/contacts");

const updateContactById = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    const error = new Error('missing fields');
    error.status = 400;
    throw error;
  }
  const { contactId } = req.params;
  const updateContact = await contacts.updateContact(contactId, req.body);
  if (!updateContact) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  res.json(updateContact);
};

module.exports = updateContactById;