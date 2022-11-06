const jwt = require('jsonwebtoken');

const { LoginAuthError } = require('../helpers/errors');
const { User } = require('../db/userModel');

const authMiddleware = (req, res, next) => {
  const [, token] = req.headers['authorization'].split(' ');

  if (!token) {
    next(new LoginAuthError('Not authorized'));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);

    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    next(new LoginAuthError('Not authorized'));
  }
};

module.exports = {
  authMiddleware,
};
