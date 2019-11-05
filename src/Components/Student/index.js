import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { book } from '../../navigation/book';
import { NavLink } from 'react-router-dom';

export const Student = () => {
  const {
    firstName,
    surname,
    age,
    email,
    sex,
    speciality
  } = useSelector((state) => state.student);

  const student = (
    <ul>
      <li>First name: { firstName }</li>
      <li>Surname: { surname }</li>
      <li>Age: { age }</li>
      <li>Email: { email }</li>
      <li>Sex: { sex }</li>
      <li>Speciality: { speciality }</li>
    </ul>
  );

  const studentIsNotCreated = (<p>Student hasn't been created, you can create a student using <NavLink to={book.studentRegistration} exact activeClassName='selected'>this link.</NavLink></p>);

  return (
    <section className='student'>
      <h1>Student</h1>

      { firstName ? student : studentIsNotCreated }
    </section>
  )
};