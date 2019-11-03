import React from 'react';
import './styles.scss';
import { book } from '../../navigation/book';
import { NavLink } from 'react-router-dom';

export const Student = () => {
  const studentData = JSON.parse(localStorage.getItem('student'));
  const studentIsNotCreated = (<p>Student hasn't been created, you can create a student using <NavLink to={book.studentRegistration} exact activeClassName='selected'>this link.</NavLink></p>);

  let studentDataList = [];

  for(let item in studentData) {
    if(studentData.hasOwnProperty(item)) {
      studentDataList.push(<li key={item}>{item} : {studentData[item]}</li>);
    }
  }

  return (
    <section className='student'>
      <h1>Student</h1>

      <ul>
        { (typeof studentDataList !== 'undefined' && studentDataList.length > 0) ? studentDataList : studentIsNotCreated }
      </ul>
    </section>
  )
};