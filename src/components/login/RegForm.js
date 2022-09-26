import React from 'react';

const RegForm = () => {
  return (
    <form id="Reg-form" className="d-flex flex-column m-auto p-2">
        <label>Создайте бесплатный аккаунт</label>
        <input type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100"></input>
        <input type="password" autoComplete="off" placeholder="Пароль" className="input-placeholder w-100"></input>
        <input type="password" autoComplete="off" placeholder="Повторите пароль" className="input-placeholder w-100"></input>
        <button type="button" className="mt-5 p-2 w-100">Создать аккаунт</button>
    </form>
  )
}

export default RegForm;