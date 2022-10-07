import React from 'react';

import LoginHeader from './LoginHeader';

const LoginForm = () => {
  //console.log('login-form');
  return (
    <form id="Login-form" className="d-flex flex-column login-form-animation-backwards">
        <LoginHeader />
        <input type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100 mt-5"></input>
        <input type="password" autoComplete="off" placeholder="Пароль" className="input-placeholder w-100"></input>
        <button type="button" className="mt-5 p-2 w-100">Войти</button>
    </form>
  )
}

export default LoginForm;