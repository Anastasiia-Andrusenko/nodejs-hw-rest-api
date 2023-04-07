const express = require('express');

const router = express.Router();

const { validation, ctrlWrapper, isValidId, validationFavorite } = require('../../middlewares');
const { addContactSchema, updateFavoriteSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(addContactSchema);
const validateFavoriteMiddleware = validationFavorite(updateFavoriteSchema);

// GET /api//contacts 
router.get('/', ctrlWrapper(ctrl.getAllContacts));

//  GET /api/contacts/:contactId
router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getContactById));

// POST /api/contacts
router.post('/', validateMiddleware, ctrlWrapper(ctrl.addContact));

// DELETE /api/contacts/:contactId 
router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.deleteContact));

// PUT /api/contacts/:contactId
router.put('/:contactId', isValidId, ctrlWrapper(ctrl.updateContactById));

// PATCH /api/contacts/:contactId/favorite
router.patch('/:contactId/favorite', isValidId, validateFavoriteMiddleware, ctrlWrapper(ctrl.updateStatusContact));


module.exports = router;
