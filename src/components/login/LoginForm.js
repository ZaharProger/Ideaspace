import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../globalConstants';
import LoginHeader from './LoginHeader';

const LoginForm = () => {
  const navigate = useNavigate();
  //console.log('login-form');
  return (
    <form id="Login-form" className="d-flex flex-column login-form-animation-backwards">
        <LoginHeader />
        <input type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100 mt-5"></input>
        <input type="password" autoComplete="off" placeholder="Пароль" className="input-placeholder w-100"></input>
        <button type="button" className="mt-5 p-2 w-100" onClick={ () => navigate(routes.main) }>Войти</button>
    </form>
  )
}

export default LoginForm;