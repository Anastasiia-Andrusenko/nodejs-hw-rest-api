
const contacts = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);
  if (!contact) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  res.json(contact);
};

module.exports = getContactById;