const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../db/userModel');
const { RegistrationConflictError, LoginAuthError } = require('../helpers/errors');

const signupUser = async (email, password) => {
  if (await User.findOne({ email })) {
    throw new RegistrationConflictError('Email is use');
  }

  const user = new User({
    email,
    password,
  });

  await user.save();
  return user;
};
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new LoginAuthError('Email or password is wrong');
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new LoginAuthError('Email or password is wrong');
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET
  );

  await User.findByIdAndUpdate(user._id, { token }, { runValidators: true });

  return token;
};

module.exports = {
  signupUser,
  loginUser,
};
