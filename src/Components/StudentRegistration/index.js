import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studentActions  } from '../../bus/student/actions';
import { Formik, Form, Field } from 'formik';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles.scss';
import { validateFormFields } from './useValidation';
import * as Yup from 'yup';

export const StudentRegistration = () => {
  const initialValues = useSelector((state) => state.student);
  const dispatch = useDispatch();
  
  let [formFilled, setFormFilled] = useState(false);

  const submitForm = (values) => {
    dispatch(studentActions.setStudent(values));
    console.log('Form values', values);
    setFormFilled(true);
  };
  
  const studentSchema = Yup.object().shape({
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

  return (
    <section className='form'>
      <h1>Student Registration Form</h1>

      {formFilled &&
        <h3 className='text-success'>Form is filled! Thank you!</h3>
      }

      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={studentSchema}
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
                <label htmlFor='password'>Password</label>
                <Field type='password' as='input' name='password' placeholder='Password' className={'form-control ' + (touched.password && errors.password ? 'is-invalid' : '')} />

                <span className='text-danger'>{ touched.password && errors.password }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='confirmpassword'>Confirm password</label>
                <Field type='password' as='input' name='confirmpassword' placeholder='Confirm password' className={'form-control ' + (touched.confirmpassword && errors.confirmpassword ? 'is-invalid' : '')} />
                <span className='text-danger'>{ touched.confirmpassword && errors.confirmpassword }</span>
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

              <button disabled={isSubmitting} type='submit' className='btn btn-primary mb-2'>{initialValues.firstName ? 'Update' : 'Submit'}</button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
};