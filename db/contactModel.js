const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uniq: true,
  },
  email: {
    type: String,
    required: true,
    uniq: true,
  },
  phone: {
    type: String,
    required: true,
    uniq: true,
  },
  favorite: Boolean,
});

const Contact = mongoose.model('Contacts', contactSchema);

module.exports = {
  Contact,
};
