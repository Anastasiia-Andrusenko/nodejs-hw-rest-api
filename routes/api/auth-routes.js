const express = require('express');

const router = express.Router();

const { validationUser, ctrlWrapper, authenticate, validationSubscription, upload } = require('../../middlewares');
const { registerSchema, loginSchema, updateSubscriptionSchema, verificationEmailSchema} = require('../../schemas');

const validateRegisterMiddleware = validationUser(registerSchema);
const validateEmailMiddleware = validationUser(verificationEmailSchema);
const validateLoginMiddleware = validationUser(loginSchema);
const validateSubscriptionMiddleware = validationSubscription(updateSubscriptionSchema);

const { auth: ctrl } = require('../../controllers');


// REGISTER
router.post('/register', validateRegisterMiddleware, ctrlWrapper(ctrl.register));

// Verification
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));
// POST /users/verify/
router.post('/verify', validateEmailMiddleware, ctrlWrapper(ctrl.resendVerifyEmail));

// LOGIN
router.post('/login', validateLoginMiddleware, ctrlWrapper(ctrl.login));

// LOGOUT
router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

// CURRENT
router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

// UPDsubscription
router.patch('/', authenticate, validateSubscriptionMiddleware, ctrlWrapper(ctrl.updateSubscription));

// UPDavatar 
router.patch('/avatars', authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar)); 

module.exports = router;
  
