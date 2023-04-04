const express = require('express');

const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const { contactSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(contactSchema);

// GET /api//contacts 
router.get('/', ctrlWrapper(ctrl.getAllContacts));

//  GET /api/contacts/:contactId
router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

// POST /api/contacts
router.post('/', validateMiddleware, ctrlWrapper(ctrl.addContact));

// DELETE /api/contacts/:contactId 
router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

// PUT /api/contacts/:contactId
router.put('/:contactId', ctrlWrapper(ctrl.updateContactById));

// PATCH /api/contacts/:contactId/favorite
router.patch('/:contactId/favorite', ctrlWrapper(ctrl.updateContactById));


module.exports = router;
