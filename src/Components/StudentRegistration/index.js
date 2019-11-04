import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles.scss';

export const StudentRegistration = () => {

  const initialValues = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: ''
  };

  let [formFilled, setFormFilled] = useState(false);

  const submitForm = (values, {setSubmitting, resetForm}) => {
    console.log('Form values', values);

    setFormFilled(true);
    resetForm(initialValues);
  };

  return (
    <section className='form'>
      <h1>Student Registration Form</h1>

      {formFilled &&
        <h3 className='text-success'>Form is filled! Thank you!</h3>
      }

      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        {(props) => {
          const { isSubmitting } = props;

          return(
            <Form>
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
                <label htmlFor="sex">Sex</label><br/>
                <label className='custom-label'>
                  <Field type='radio' as='input' name='sex' className='form-control' value='male' />
                  Male
                </label>
                <label className='custom-label'>
                 <Field type='radio' as='input' name='sex' className='form-control' value='female' />
                  Female
                </label>
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

              <button disabled={isSubmitting} type='submit' className='btn btn-primary mb-2'>Submit</button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
};