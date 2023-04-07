const Contact = require('../../models/contact');

const { HttpError } = require('../../helpers');

const updateStatusContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, 'Missing fields');
  }
  const { contactId } = req.params;
  const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!updateContact) {
    throw HttpError(404);
  }
  res.json(updateContact);
};

module.exports = updateStatusContact;