import React from 'react';

import useRedirect from '../../hooks/useRedirect';
import { navigate_buttons } from '../../globalConstants';
import LoginHeader from './LoginHeader';

const LoginForm = () => {
  const redirect = useRedirect(navigate_buttons.login_form.login);
  //console.log('login-form');
  return (
    <form id="Login-form" className="d-flex flex-column login-form-animation-backwards">
        <LoginHeader />
        <input type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100 mt-5"></input>
        <input type="password" autoComplete="off" placeholder="Пароль" className="input-placeholder w-100"></input>
        <button type="button" className="mt-5 p-2 w-100" onClick={ () => redirect() }>Войти</button>
    </form>
  )
}

export default LoginForm;