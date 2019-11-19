import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import { Student} from './index';

const init = () => {
  const { container, getByTestId } = render(<Student />);
  return {
    container,
    getByTestId
  }
};

describe('Student component', () => {
  afterEach(() => cleanup());

  it('Component should render without errors', () => {
    const { getByTestId } = init();
    const title = getByTestId('componentTitle');

    expect(title.textContent).toBe('Student');
  });

  it('Should render ul with student data', () => {
    const { getByTestId } = init();
    const studentData = getByTestId('studentData');

    const testValues = {
      firstname: 'f',
      surname: 'f',
      age: '3',
      email: 'f',
      sex: 'f',
      speciality: 'f',
      password: 'f',
      confirmpassword: 'f'
    };

    jest.spyOn(localStorage.__proto__, 'setItem');
    localStorage.setItem('student', JSON.stringify(testValues));

    expect(studentData).toBeTruthy();

    localStorage.clear();
  });

  it('Create student title should be rendered if localStorage is empty', () => {
    const { getByTestId } = init();
    const title = getByTestId('createStudentTitle');

    localStorage.clear();

    expect(title).toBeTruthy();
  });

});