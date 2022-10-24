import { useNavigate } from "react-router-dom";

import { errorMessages, RequestTypes, routes } from "../globalConstants";

const useRegAuth = () => {
    const navigate = useNavigate();

    function performValidation(inputsToValidate, messageIfError, predicate){
        const validationResult = inputsToValidate.filter(input => predicate(input));

        let errorMessage = "";
        let errorInputs = [];
        if (validationResult.length != 0){
            errorMessage = messageIfError;
            errorInputs.push(...validationResult);
        }

        return {
            error_message: errorMessage,
            error_inputs: errorInputs
        }
    }

    function validateFormOnclient(formInputs, requestType) {
        let validationResults = [];

        validationResults.push(performValidation(formInputs, errorMessages.empty_fields, (input) => input.value == ""));
        validationResults.push(performValidation(formInputs, errorMessages.invalid_login,
            (input) => input.name == 'login' && input.value.includes(" ")));

        if (requestType == RequestTypes.reg){
            validationResults.push(performValidation(formInputs, errorMessages.invalid_password,
            (input) => input.name == 'password' && input.value.length < 8));

            const formPasswords = formInputs.filter(input => input.name.includes('password'));
            validationResults.push(performValidation(formPasswords, errorMessages.password_mismatch,
            (input) => input.value != formPasswords[0].value));
        }

        let i = 0;
        let isErrorFound = false;
        for (i = 0; i < validationResults.length && !isErrorFound; ++i){
            isErrorFound = validationResults[i].error_message != "";
        }
        
        return validationResults[--i];
    }

    function updateInputs(oldInputs, newInputs){
        oldInputs.forEach(input => {
            input.classList.remove('correct', 'incorrect');
            input.classList.add(newInputs.includes(input)? 'incorrect' : 'correct');
        });
    }

    function performResultAction(requestType){
        switch(requestType){
            case RequestTypes.auth:
                navigate(routes.main);
                break;
            case RequestTypes.reg:
                const regSuccessPopup = document.getElementById('Reg-success-popup');
                if (regSuccessPopup.classList.contains('active')){
                    regSuccessPopup.classList.replace('active', 'hidden');
                }
                setTimeout(() => regSuccessPopup.classList.replace('hidden', 'active'), 100);
                document.getElementById('Reg-ref-button').onclick(new MouseEvent('mousedown'), true);
                break;
        }
    }

    return async function(form, requestType){
        const formInputs = Array.from(form.getElementsByTagName('input'));
        let { error_message: errorMessage, error_inputs: errorInputs } = validateFormOnclient(formInputs, requestType);
 
        if (errorMessage == ""){
            const formData = new FormData(form);        
            formData.delete("repeat-password");
            formData.append('requestType', requestType);
            
            const formButton = Array.from(form.getElementsByTagName('button'))[0];
            const prevButtonText = formButton.innerText;
            console.log(prevButtonText);
            formButton.innerText = 'Подождите...';

            const response = await fetch('https://localhost:7042/ideaspace/api/Users', {
                method: 'POST',
                mode: 'cors',
                body: formData    
            });
            
            formButton.innerText = prevButtonText;
            if (response.ok){
                const responseData = await response.json();
        
                if (responseData.result){
                    errorInputs = [];             
                }
                else{
                    errorMessage = responseData.message;
                    errorInputs.push(...formInputs.filter(input => input.name == responseData.fieldType));
                }
            }
        }

        updateInputs(formInputs, errorInputs);
        if (errorMessage == ""){
            performResultAction(requestType); 
        }  

        return errorMessage;
    }
}

export default useRegAuth;