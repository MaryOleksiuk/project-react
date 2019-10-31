import React from 'react';
import {Formik, Form, Field} from 'formik';
import 'bootstrap-css-only/css/bootstrap.min.css';

export const StudentRegistration = () => {

  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
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
              <label htmlFor="firstName">First name</label>
              <Field type='text' as='input' name='firstName' placeholder='First name' />

              <label htmlFor="surname">Surname</label>
              <Field type='text' as='input' name='surname' placeholder='Surname' />

              <label htmlFor="age">Age</label>
              <Field type='text' as='input' name='age' placeholder='Age' />

              <label htmlFor="email">Email</label>
              <Field type='email' as='input' name='email' placeholder='Email' />

              <label htmlFor="sex">Sex</label>
              <Field type='text' as='select' name='sex' placeholder='Sex'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </Field>

              <label htmlFor="speciality">Speciality</label>
              <Field type='text' as='select' name='speciality' placeholder='Speciality'>
                <option value='designer'>Designer</option>
                <option value='developer'>Developer</option>
                <option value='writer'>Writer</option>
              </Field>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
};