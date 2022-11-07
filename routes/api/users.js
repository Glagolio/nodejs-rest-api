const express = require('express');
// const {
//   addContactValidation,
//   putContactValidation,
//   patchContactFavoriteValidation,
// } = require('../../middlewares/validationMiddleware');
// const { isValidId } = require('../../middlewares/validationIdMiddleware');
const { signupUserController, loginUserController } = require('../../controllers/usersController');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const { loginValidation } = require('../../middlewares/validationLoginMiddlware');
const { logoutMiddleware } = require('../../middlewares/logoutMiddleware');

const router = express.Router();

router.post('/signup', loginValidation, asyncWrapper(signupUserController));

router.post('/login', loginValidation, asyncWrapper(loginUserController));

router.get('/logout', logoutMiddleware);

module.exports = router;
