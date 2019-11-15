import React from "react";
import {render, fireEvent, act, cleanup} from '@testing-library/react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StudentRegistration } from './index';
import {getByTestId} from "@testing-library/dom";

Enzyme.configure({ adapter: new Adapter()});

const init = () => {
  const { container, getByTestId } = render(<StudentRegistration />);

  return {
    container,
    getByTestId
  }
};

describe('Student Registration component', () => {
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

  afterEach(() => cleanup());

  it('Form should render without errors', () => {
    const { getByTestId } = init();
    const form = getByTestId('studentForm');

    expect(form.length).toBeGreaterThan(1);
  });

  it('Form should have submit button', () => {
    const { getByTestId } = init();
    const submitButton = getByTestId('submitButton');

    expect(submitButton).toBeTruthy();
  });

  it( 'setLocalStorage mock fn', () => {
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
    localStorage.setItem( 'student', JSON.stringify(testValues) );
    expect(localStorage.setItem).toHaveBeenCalledTimes( 1 );
    expect(localStorage.setItem).toHaveBeenCalledWith( 'student', JSON.stringify(testValues));
  });


  //------------------NOT WORKING----------------------
  it('Onsubmit should be called', async() => {
    const { container } = init();
    const formNode = getByTestId(container, 'studentForm');
    const submitButton = getByTestId(container, 'submitButton');

    formNode.handleSubmit = jest.fn();

    await act(async() => {
      await fireEvent.submit(submitButton);
    });

    expect(formNode.handleSubmit).toHaveBeenCalled();
  });

  it('setFormFilled sets the open formFilled state properly', async() => {
    const wrapper = mount(<StudentRegistration/>);
    expect(wrapper.state('formFilled')).toBeFalsy();
    wrapper.instance().onSubmit(true);

    expect(wrapper.state('formFilled')).toBeTruthy();
    expect(wrapper.find('.success-title').length).toBeGreaterThan(1);


    // TO CHECK IF SUCCESS TITLE IS ON THE PAGE AFTER SUBMIT
    // const { getByTestId, container } = render(<StudentRegistration/>);
    // const submitButton = getByTestId('submitButton');
    // await act(async() => {
    //   await fireEvent.submit(submitButton);
    // });
    // expect(getByTestId('successTitle')).toBeTruthy();
  });

  //--------------------------------------------------------

  describe('Student Registration Validation on blur', () => {
    it('Should show First Name validation on blur', async() => {
      const {getByTestId} = init();
      const input = getByTestId('firstname');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('firstNameError')).not.toBeNull();
    });

    it('Should show Surname validation on blur', async() => {
      const { getByTestId } = init();
      const input = getByTestId('surname');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('surnameError')).not.toBeNull();
    });

    it('Should show Email validation on blur', async() => {
      const { getByTestId } = init();
      const input = getByTestId('email');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('emailError')).not.toBeNull();
      expect(getByTestId("emailError").textContent).toBe("Invalid email");
    });

    it('Should show Password validation on blur', async() => {
      const { getByTestId } = init();
      const input = getByTestId('password');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('passwordError')).not.toBeNull();
      expect(getByTestId("passwordError").textContent).toBe("Password must contain at least 10 characters");
    });

    it('Should show Confirm password validation on blur', async() => {
      const { getByTestId } = init();
      const input = getByTestId('confirmPassword');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('confirmPasswordError')).not.toBeNull();
    });

    it('Should show Sex validation on blur', async() => {
      const { getByTestId } = init();
      const input = getByTestId('sex');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('sexError')).not.toBeNull();
      expect(getByTestId("sexError").textContent).toBe("Invalid sex");
    });

    it('Should show Speciality validation on blur', async() => {
      const { getByTestId } = init();
      const input = getByTestId('speciality');

      await act(async() => {
        await fireEvent.blur(input);
      });

      expect(getByTestId('specialityError')).not.toBeNull();
      expect(getByTestId("specialityError").textContent).toBe("Invalid speciality");
    });
  });
});