
const Contact = require('../../models/contact');

const { HttpError } = require('../../helpers');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw HttpError(404);
  }
  res.json(contact);
};

module.exports = getContactById;