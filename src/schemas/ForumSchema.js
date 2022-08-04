import * as Yup from 'yup';

export default Yup.object().shape({
  body: Yup.string()
    .max(4000, 'The comment is too long!')
    .required('Body cannot be empty!'),
})