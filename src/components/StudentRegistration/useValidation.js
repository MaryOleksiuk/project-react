export const validateFormFields = (values) => {
  let errors = {};

  if(!values.firstName) {
    errors.firstName = 'Required';
  } else if(/\d/.test(values.firstName) || typeof values.firstName !== 'string') {
    errors.firstName = 'Name should be a string';
  }

  if(!values.surname) {
    errors.surname = 'Required';
  } else if(/\d/.test(values.surname) || typeof values.surname !== 'string') {
    errors.surname = 'Surname should be a string';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if((values.age < 6 || values.age > 60) && values.age  ) {
    errors.age = 'Age should be between 6 and 60';
  } else if(typeof values.age !== 'number') {
    errors.age = 'Age should be a number';
  }

  if(!values.sex) {
    errors.sex = 'Required';
  }

  if(!values.speciality) {
    errors.speciality = 'Required';
  }

  return errors;
};