const express = require('express');
const {
  signupUserController,
  loginUserController,
  patchSubscriptionUserController,
  getCurrentUserController,
  logoutUserController,
} = require('../../controllers/usersController');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const { loginValidation } = require('../../middlewares/validationLoginMiddlware');
const { authMiddleware } = require('../../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', loginValidation, asyncWrapper(signupUserController));

router.post('/login', loginValidation, asyncWrapper(loginUserController));

router.get('/logout', authMiddleware, asyncWrapper(logoutUserController));

router.get('/current', authMiddleware, asyncWrapper(getCurrentUserController));

router.patch('/', authMiddleware, asyncWrapper(patchSubscriptionUserController));

module.exports = router;
