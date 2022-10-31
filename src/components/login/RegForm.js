import React, { useState, useEffect } from 'react';

import { requestTypes } from '../../globalConstants';
import useRegAuth from '../../hooks/useRegAuth';

const RegForm = (props) => {
  const [errorMessage, changeErrorMessage] = useState("");
  const registerUser = useRegAuth();
  //console.log('reg-form');

  useEffect(() => {
    const regForm = document.getElementById('Reg-form');
    regForm.onsubmit = async (e) => {
      e.preventDefault();

      const receivedMessage = await registerUser(regForm, requestTypes.reg);
      changeErrorMessage(receivedMessage);
    }
    
    if (props.saved_inputs != null && errorMessage == ""){
      const regInputs = Array.from(regForm.getElementsByTagName('input'));
      for (let i = 0; i < regInputs.length; ++i){
        regInputs[i].value = props.saved_inputs[i];
      }
    }
  })

  return (
    <form id="Reg-form" className="d-flex flex-column m-auto p-2">
        <label>Создайте бесплатный аккаунт</label>
        <input name="login" type="text" autoComplete="off" placeholder="Логин"
        className="input-placeholder w-100 correct"></input>
        <input name="password" type="password" autoComplete="off" placeholder="Пароль"
        className="input-placeholder w-100 correct"></input>
        <input name="repeat-password" type="password" autoComplete="off" placeholder="Повторите пароль"
        className="input-placeholder w-100 correct"></input>
        <span>{ errorMessage }</span>
        <button type="submit" className="mt-3 p-2 w-100">Создать аккаунт</button>
    </form>
  )
}

export default RegForm;