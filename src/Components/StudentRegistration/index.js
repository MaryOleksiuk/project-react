import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useLocalStorage } from './useLocalStorage';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles.scss';

export const StudentRegistration = () => {
  const { dataFromLocalStorage, addToLocalStorage } = useLocalStorage();

  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
  };

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
      >
        {(props) => {

          const { isSubmitting, handleSubmit } = props;

          return(
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <Field type='text' as='input' name='firstName' placeholder='First name' className='form-control' />
              </div>

              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <Field type='text' as='input' name='surname' placeholder='Surname' className='form-control' />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <Field type='number' as='input' name='age' placeholder='Age' className='form-control'  />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type='email' as='input' name='email' placeholder='Email' className='form-control'  />
              </div>

              <div className="form-group">
                <label htmlFor="sex">Sex</label>
                <Field type='text' as='select' name='sex' placeholder='Sex' className='form-control'>
                  <option value="">Select sex</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Field>
              </div>

              <div className="form-group">
                <label htmlFor="speciality">Speciality</label>
                <Field type='text' as='select' name='speciality' placeholder='Speciality' className='form-control'>
                  <option value="">Select speciality</option>
                  <option value='designer'>Designer</option>
                  <option value='developer'>Developer</option>
                  <option value='writer'>Writer</option>
                </Field>
              </div>

              <button disabled={isSubmitting} type='submit' className='btn btn-primary mb-2'>{dataFromLocalStorage ? 'Update data' : 'Submit'}</button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
};