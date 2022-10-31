import React, { useEffect, useState } from 'react';

import { requestTypes } from '../../globalConstants';
import useRegAuth from '../../hooks/useRegAuth';
import LoginHeader from './LoginHeader';

const LoginForm = () => {
  const [errorMessage, changeErrorMessage] = useState("");
  const authorizeUser = useRegAuth();
  //console.log('login-form');

  useEffect(() => {
    const loginForm = document.getElementById('Login-form');
    loginForm.onsubmit = async (e) => {
      e.preventDefault();

      const receivedMessage = await authorizeUser(loginForm, requestTypes.auth);
      changeErrorMessage(receivedMessage);
    }
  })

  return (
    <form id="Login-form" className="d-flex flex-column login-form-animation-backwards">
        <LoginHeader />
        <input name="login" type="text" autoComplete="off" placeholder="Логин"
        className="input-placeholder w-100 mt-5 correct"></input>
        <input name="password" type="password" autoComplete="off" placeholder="Пароль"
        className="input-placeholder w-100 correct"></input>
        <span>{ errorMessage }</span>
        <button type="submit" className="mt-3 p-2 w-100">Войти</button>
    </form>
  )
}

export default LoginForm;