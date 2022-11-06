const { Contact } = require('../db/contactModel');

const listContacts = async userId => {
  const data = await Contact.find({ userId });
  return data;
};
const getContactById = async contactId => {
  const data = await Contact.findById(contactId);
  return data;
};

const removeContact = async contactId => {
  const data = await Contact.findByIdAndRemove(contactId);
  return data;
};

const addContact = async ({ name, email, phone, favorite }, contactId) => {
  const contact = new Contact({ name, email, phone, favorite, contactId });
  const newContact = await contact.save();
  return newContact;
};

const updateContact = async (contactId, body) => {
  await Contact.findByIdAndUpdate(contactId, { $set: body }, { runValidators: true });
  const updatedContact = Contact.findById(contactId);

  return updatedContact;
};
const updateStatusContact = async (contactId, favorite) => {
  await Contact.findByIdAndUpdate(contactId, { favorite }, { runValidators: true });
  const updatedContact = Contact.findById(contactId);

  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
