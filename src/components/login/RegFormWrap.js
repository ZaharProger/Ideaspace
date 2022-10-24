import React, { useEffect, useState } from 'react';

import RegForm from './RegForm';

const RegFormWrap = () => {
    //console.log('reg-form-wrap');
    const [regShowStatus, changeRegShowStatus] = useState(true);
    const [regInputsData, changeRegInputsData] = useState(null);

    useEffect(() => {
        const regFormWrap = document.getElementById('Reg-form-wrap');
        const showButton = document.getElementById('Reg-ref-button');
        const loginForm = document.getElementById('Login-form');

        showButton.onclick = (e, isRegister=false) => {
            changeRegShowStatus(!regShowStatus);
            
            const regForm = document.getElementById('Reg-form');
            if (regForm != undefined && !regShowStatus){
                const regInputs = Array.from(regForm.getElementsByTagName('input'));
                changeRegInputsData(regInputs.map(input => isRegister? "" : input.value));
            }

            regFormWrap.classList.remove('reg-form-animation-forwards', 'reg-form-animation-backwards');
            regFormWrap.classList.add(regShowStatus? 'reg-form-animation-forwards' : 'reg-form-animation-backwards');

            showButton.classList.remove('show-button-animation-forwards', 'show-button-animation-backwards');
            showButton.classList.add(regShowStatus? 'show-button-animation-forwards' : 'show-button-animation-backwards');

            loginForm.classList.remove('login-form-animation-forwards', 'login-form-animation-backwards');
            loginForm.classList.add(regShowStatus? 'login-form-animation-forwards' : 'login-form-animation-backwards');
        }

        window.onresize = () => showButton.classList.replace(window.innerWidth > 1100?
            'fa-arrow-down' : 'fa-arrow-right', window.innerWidth > 1100? 'fa-arrow-right' : 'fa-arrow-down');
        
        window.onresize();
    })

    return (
        <div id="Reg-form-wrap" className="d-flex reg-form-animation-backwards">
            { !regShowStatus? <RegForm saved_inputs={ regInputsData } /> : null }
            <i id="Reg-ref-button" className="fa-solid fa-arrow-right d-flex"></i>
        </div>
  )
}

export default RegFormWrap;