const { signupUser, loginUser } = require('../models/users');

const signupUserController = async (req, res) => {
  const { email, password } = req.body;

  const user = await signupUser(email, password);
  res.status(201).json({ status: 'success', email: user.email, subscription: user.subscription });
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  const token = await loginUser(email, password);
  res.status(200).json({ status: 'success', token });
};

module.exports = {
  signupUserController,
  loginUserController,
};
