const Yup = require('yup');

module.exports = Yup.object().shape({
  body: Yup.string()
  .max(4000, 'Comment is too long!')
  .required('Body cannot be empty!'),
});