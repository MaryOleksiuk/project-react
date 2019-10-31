import React from 'react';
import { Formik, Form } from 'formik';

export const StudentRegistration = () => {

  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    specialty: ''
  };

  const submitForm = () => {

  };

  return (
    <section className='form'>
      <h1>Student Registration Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        {() => {

          return(
            <Form>

            </Form>
          )
        }}
      </Formik>
    </section>
  )
};