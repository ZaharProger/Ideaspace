import React from 'react';

const LoginForm = () => {
  return (
    <form id="Login-form" className="d-flex flex-column login-form-animation-backwards">
        <label><span>Ideaspace</span><br />Войдите в приложение</label>
        <input type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100"></input>
        <input type="password" autoComplete="off" placeholder="Пароль" className="input-placeholder w-100"></input>
        <button type="button" className="mt-5 p-2 w-100">Войти</button>
    </form>
  )
}

export default LoginForm;