const mongoose = require('mongoose');

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection successful');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  mongoConnect,
};
