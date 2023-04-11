const express = require('express');

const router = express.Router();

const { validationUser, ctrlWrapper, authenticate, validationSubscription, isValidUserId } = require('../../middlewares');
const { registerSchema, loginSchema, updateSubscriptionSchema} = require('../../schemas');

const validateRegisterMiddleware = validationUser(registerSchema);
const validateLoginMiddleware = validationUser(loginSchema);
const validateSubscriptionMiddleware = validationSubscription(updateSubscriptionSchema);

const { auth: ctrl } = require('../../controllers');

// REGISTER
router.post('/register', validateRegisterMiddleware, ctrlWrapper(ctrl.register));


// LOGIN
router.post('/login', validateLoginMiddleware, ctrlWrapper(ctrl.login));

// LOGOUT
router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

// CURRENT
router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

// UPDsubscription
router.patch('/:userId', authenticate, isValidUserId, validateSubscriptionMiddleware, ctrlWrapper(ctrl.updateSubscription))

module.exports = router;

// Обновление подписки (subscription) пользователя 
// через эндпоинт PATCH / users.
// Подписка должна иметь одно из следующих значений
// ['starter', 'pro', 'business']