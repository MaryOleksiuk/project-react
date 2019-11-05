import * as Yup from "yup";

export const studentSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  surname: Yup.string()
    .required('Required'),
  age: Yup.number()
    .min(6, 'You should be older than 6')
    .max(60, 'You should be younger than 60'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(10, 'Password must contain at least 10 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9]{3,})/,
      'Must contain characters and at least 3 numbers'
    )
    .required('Required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Required'),
  sex: Yup.string()
    .oneOf([
      'male',
      'female'
    ], 'Invalid sex')
    .required('Required'),
  speciality: Yup.string()
    .oneOf([
      'designer',
      'developer',
      'writer'
    ], 'Invalid speciality')
    .required('Required'),
});