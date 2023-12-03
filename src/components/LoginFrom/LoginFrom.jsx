import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';

import {
  BtnLogin,
  FormLogin,
  InputLogin,
  LabelLogin,
} from './loginForm.styled';

const loginValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const loginSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));

    resetForm();
  };

  return (
    <>
      <Formik initialValues={loginValues} onSubmit={loginSubmit}>
        <FormLogin>
          <LabelLogin htmlFor="">
            Email
            <InputLogin type="email" name="email" required />
          </LabelLogin>
          <LabelLogin htmlFor="">
            Password
            <InputLogin type="password" name="password" required />
          </LabelLogin>
          <BtnLogin type="submit">Log in</BtnLogin>
        </FormLogin>
      </Formik>
    </>
  );
};
