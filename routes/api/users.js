const express = require('express');
// const {
//   addContactValidation,
//   putContactValidation,
//   patchContactFavoriteValidation,
// } = require('../../middlewares/validationMiddleware');
// const { isValidId } = require('../../middlewares/validationIdMiddleware');
const { signupUserController, loginUserController } = require('../../controllers/usersController');
const { asyncWrapper } = require('../../helpers/apiHelpers');

const router = express.Router();

router.post('/signup', asyncWrapper(signupUserController));

router.post('/login', asyncWrapper(loginUserController));

module.exports = router;
