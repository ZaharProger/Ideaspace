import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../globalConstants';
import useFormValidation from '../../hooks/useFormValidation';
import LoginHeader from './LoginHeader';

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, changeErrorMessage] = useState("");
  const validateForm = useFormValidation();
  //console.log('login-form');

  useEffect(() => {
    const loginForm = document.getElementById('Login-form');
    loginForm.onsubmit = (e) => {
      e.preventDefault();

      const validationResult = validateForm(loginForm.id);
      changeErrorMessage(validationResult);
      if (validationResult == ""){
        navigate(routes.main);
      }
    }
  })

  return (
    <form id="Login-form" className="d-flex flex-column login-form-animation-backwards">
        <LoginHeader />
        <input name="login" type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100 mt-5 correct"></input>
        <input name="password" type="password" autoComplete="off" placeholder="Пароль" className="input-placeholder w-100 correct"></input>
        <span>{ errorMessage }</span>
        <button type="submit" className="mt-5 p-2 w-100">Войти</button>
    </form>
  )
}

export default LoginForm;