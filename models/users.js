const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../db/userModel');
const { NotAuthorizedError } = require('../helpers/apiHelpers');

const signupUser = async (email, password) => {
  const user = new User({
    email,
    password,
  });
  await user.save();
};
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotAuthorizedError(`No user with email ${email} found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError(`Wrong password or email`);
  }

  const toket = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET
  );

  return toket;
};

module.exports = {
  signupUser,
  loginUser,
};
