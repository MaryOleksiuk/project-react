import React from 'react';
import {Formik, Form, Field} from 'formik';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles.scss';
import { validateFormFields } from './useValidation';

export const StudentRegistration = () => {

  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
  };

  const addToLocalStorage = (data) => {
    localStorage.setItem('student', JSON.stringify(data));
  };

  const dataFromLocalStorage = !(localStorage.getItem('student') === null) ? JSON.parse(localStorage.getItem('student')) : false;

  const submitForm = (values, {setSubmitting}) => {
    addToLocalStorage(values);

    console.log('Form values', values);

    setTimeout(() => {
      setSubmitting(false);
    }, 500);

    alert('Thank you! You\'ve submitted the form');
  };

  return (
    <section className='form'>
      <h1>Student Registration Form</h1>

      <Formik
        initialValues={dataFromLocalStorage ? dataFromLocalStorage : initialValues}
        onSubmit={submitForm}
        validate={validateFormFields}
      >
        {(props) => {

          const { touched, isSubmitting, handleSubmit, errors } = props;

          return(
            <Form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='firstName'>First name</label>
                <Field type='text' as='input' name='firstName' placeholder='First name' className={'form-control ' + (touched.firstName && errors.firstName ? 'is-invalid' : '')} />

                <span className='text-danger'>{ touched.firstName && errors.firstName }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='surname'>Surname</label>
                <Field type='text' as='input' name='surname' placeholder='Surname' className={'form-control ' + (touched.surname && errors.surname ? 'is-invalid' : '')} />

                <span className='text-danger'>{ touched.surname && errors.surname }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <Field type='number' as='input' name='age' placeholder='Age' className={'form-control ' + (touched.age && errors.age ? 'is-invalid' : '')} />

                <span className='text-danger'>{ touched.age && errors.age }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Field
                  type='email'
                  as='input'
                  name='email'
                  placeholder='Email'
                  className={'form-control ' + (touched.email && errors.email ? 'is-invalid' : '')}
                />

                <span className='text-danger'>{ touched.email && errors.email }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='sex'>Sex</label>
                <Field type='text' as='select' name='sex' placeholder='Sex' className={'form-control ' + (touched.sex && errors.sex ? 'is-invalid' : '')}>
                  <option value="">Select sex</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Field>

                <span className='text-danger'>{ touched.sex && errors.sex }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='speciality'>Speciality</label>
                <Field type='text' as='select' name='speciality' placeholder='Speciality' className={'form-control ' + (touched.speciality && errors.speciality ? 'is-invalid' : '')}>
                  <option value="">Select speciality</option>
                  <option value='designer'>Designer</option>
                  <option value='developer'>Developer</option>
                  <option value='writer'>Writer</option>
                </Field>

                <span className='text-danger'>{ touched.speciality && errors.speciality }</span>
              </div>

              <button disabled={isSubmitting} type='submit' className='btn btn-primary mb-2'>{dataFromLocalStorage ? 'Update data' : 'Submit'}</button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
};