const express = require('express');

const router = express.Router();

const { validation, ctrlWrapper, isValidId, validationFavorite, authenticate } = require('../../middlewares');
const { addContactSchema, updateFavoriteSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(addContactSchema);
const validateFavoriteMiddleware = validationFavorite(updateFavoriteSchema);

// GET /api//contacts 
router.get('/', authenticate, ctrlWrapper(ctrl.getAllContacts));

//  GET /api/contacts/:contactId
router.get('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.getContactById));

// POST /api/contacts
router.post('/', authenticate, validateMiddleware, ctrlWrapper(ctrl.addContact));

// DELETE /api/contacts/:contactId 
router.delete('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.deleteContact));

// PUT /api/contacts/:contactId
router.put('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.updateContactById));

// PATCH /api/contacts/:contactId/favorite
router.patch('/:contactId/favorite', authenticate, isValidId, validateFavoriteMiddleware, ctrlWrapper(ctrl.updateStatusContact));


module.exports = router;
