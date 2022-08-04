const Yup = require("yup");

module.exports = Yup.object().shape({
  effect: Yup.string()
    .max(90, "Effect is too long!")
    .required("Effect cannot be empty!"),
  spell: Yup.string()
    .max(50, "Spell is too long!")
    .required("Spell cannot be empty!"),
  type: Yup.string()
    .max(80, "Type is too long!")
    .required("Type cannot be empty!"),
});
