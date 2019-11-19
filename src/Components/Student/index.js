import React from 'react';
import './styles.scss';

export const Student = () => {
  const studentData = JSON.parse(localStorage.getItem('student'));
  const studentIsNotCreated = (<p data-testid='createStudentTitle'>Student hasn't been created, you can create a student using <a href='/student/registration' >this link.</a></p>);

  let studentDataList = [];

  for(let item in studentData) {
    if(studentData.hasOwnProperty(item)) {
      studentDataList.push(<li key={item}>{item} : {studentData[item]}</li>);
    }
  }

  return (
    <section className='student'>
      <h1 data-testid='componentTitle'>Student</h1>

      <ul>
        { (typeof studentDataList !== 'undefined' && studentDataList.length > 0) ? studentDataList : studentIsNotCreated }
      </ul>
    </section>
  )
};