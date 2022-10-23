import React, { useState, useEffect } from 'react';

import useFormValidation from '../../hooks/useFormValidation';

const RegForm = (props) => {
  const [errorMessage, changeErrorMessage] = useState("");
  const validateForm = useFormValidation();
  //console.log('reg-form');

  useEffect(() => {
    const loginForm = document.getElementById('Reg-form');
    loginForm.onsubmit = (e) => {
      e.preventDefault();

      const regSuccessPopup = document.getElementById('Reg-success-popup');

      const validationResult = validateForm(loginForm.id);
      changeErrorMessage(validationResult);
      if (validationResult == ""){
        if (regSuccessPopup.classList.contains('active')){
            regSuccessPopup.classList.replace('active', 'hidden');
        }
        setTimeout(() => regSuccessPopup.classList.replace('hidden', 'active'), 100);

        document.getElementById('Reg-ref-button').onclick();
      }
    }
  })

  return (
    <form id="Reg-form" className="d-flex flex-column m-auto p-2">
        <label>Создайте бесплатный аккаунт</label>
        <input name="login" type="text" autoComplete="off" placeholder="Логин" className="input-placeholder w-100 correct"></input>
        <input name="password" type="password" autoComplete="off" placeholder="Пароль"
        className="input-placeholder w-100 correct"></input>
        <input name="repeat-password" type="password" autoComplete="off" placeholder="Повторите пароль"
        className="input-placeholder w-100 correct"></input>
        <span>{ errorMessage }</span>
        <button type="submit" className="mt-5 p-2 w-100">Создать аккаунт</button>
    </form>
  )
}

export default RegForm;