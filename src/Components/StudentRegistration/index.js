import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles.scss';
import * as Yup from 'yup';
import {useLocalStorage} from "./useLocalStorage";

export const StudentRegistration = () => {
  let [formFilled, setFormFilled] = useState(false);

  const { dataFromLocalStorage, addToLocalStorage } = useLocalStorage();

  const initialValues = {
    firstname: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: '',
    password: '',
    confirmpassword: ''
  };

  const submitForm = (values) => {
    addToLocalStorage(values);

    setFormFilled(true);
  };

  const studentSchema = Yup.object().shape({
    firstname: Yup.string()
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
        <h3 data-testid='successTitle' className='text-success'>Form is filled! Thank you!</h3>
      }

      <Formik
        initialValues={dataFromLocalStorage ? dataFromLocalStorage : initialValues}
        onSubmit={submitForm}
        validationSchema={studentSchema}
        data-testid='form'
        class='test'
      >
        {(props) => {

          const { touched, isSubmitting, handleSubmit, errors } = props;

          return(
            <Form onSubmit={handleSubmit} data-testid='studentForm' className='form'>
              <div className='form-group'>
                <label htmlFor='firstname'>First name</label>
                <Field data-testid='firstname' type='text' as='input' name='firstname' placeholder='First name' className={'form-control ' + (touched.firstname && errors.firstname ? 'is-invalid' : '')} />

                <span data-testid='firstNameError' className='text-danger'>{ touched.firstname && errors.firstname }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='surname'>Surname</label>
                <Field data-testid='surname' type='text' as='input' name='surname' placeholder='Surname' className={'form-control ' + (touched.surname && errors.surname ? 'is-invalid' : '')} />

                <span data-testid='surnameError' className='text-danger'>{ touched.surname && errors.surname }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <Field data-testid='age' type='number' as='input' name='age' placeholder='Age' className={'form-control ' + (touched.age && errors.age ? 'is-invalid' : '')} />

                <span data-testid='ageError' className='text-danger'>{ touched.age && errors.age }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Field
                  data-testid='email'
                  type='email'
                  as='input'
                  name='email'
                  placeholder='Email'
                  className={'form-control ' + (touched.email && errors.email ? 'is-invalid' : '')}
                />

                <span data-testid='emailError' className='text-danger'>{ touched.email && errors.email }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <Field data-testid='password' type='password' as='input' name='password' placeholder='Password' className={'form-control ' + (touched.password && errors.password ? 'is-invalid' : '')} />

                <span data-testid='passwordError' className='text-danger'>{ touched.password && errors.password }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='confirmpassword'>Confirm password</label>
                <Field data-testid='confirmPassword' type='password' as='input' name='confirmpassword' placeholder='Confirm password' className={'form-control ' + (touched.confirmpassword && errors.confirmpassword ? 'is-invalid' : '')} />

                <span data-testid='confirmPasswordError' className='text-danger'>{ touched.confirmpassword && errors.confirmpassword }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='sex'>Sex</label>
                <Field data-testid='sex' type='text' as='select' name='sex' placeholder='Sex' className={'form-control ' + (touched.sex && errors.sex ? 'is-invalid' : '')}>
                  <option value="">Select sex</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </Field>

                <span data-testid='sexError' className='text-danger'>{ touched.sex && errors.sex }</span>
              </div>

              <div className='form-group'>
                <label htmlFor='speciality'>Speciality</label>
                <Field data-testid='speciality' type='text' as='select' name='speciality' placeholder='Speciality' className={'form-control ' + (touched.speciality && errors.speciality ? 'is-invalid' : '')}>
                  <option value="">Select speciality</option>
                  <option value='designer'>Designer</option>
                  <option value='developer'>Developer</option>
                  <option value='writer'>Writer</option>
                </Field>

                <span data-testid='specialityError' className='text-danger'>{ touched.speciality && errors.speciality }</span>
              </div>

              {isSubmitting && <div id="submitting">Submitting</div>}

              <button data-testid='submitButton' disabled={isSubmitting} type='submit' className='btn btn-primary mb-2'>{dataFromLocalStorage ? 'Update data' : 'Submit'}</button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
};