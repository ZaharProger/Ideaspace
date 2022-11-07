import { requestTypes, errorMessages } from "../globalConstants";

const useFormValidation = () => {
    function updateInputs(oldInputs, newInputs){
        oldInputs.forEach(input => {
            input.classList.remove('correct', 'incorrect');
            input.classList.add(newInputs.includes(input)? 'incorrect' : 'correct');
        });
    }

    function validateCase(inputsToValidate, messageIfError, predicate){
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

    function validateForm(formInputs, requestType) {
        let validationResults = [];

        validationResults.push(validateCase(formInputs, errorMessages.empty_fields, (input) => input.value == ""));
        if (requestType == requestTypes.reg || requestType == requestTypes.auth){
            validationResults.push(validateCase(formInputs, errorMessages.invalid_login,
            (input) => input.name == 'login' && input.value.includes(" ")));
    
            if (requestType == requestTypes.reg){
                validationResults.push(validateCase(formInputs, errorMessages.invalid_password,
                (input) => input.name == 'password' && input.value.length < 8));
    
                const formPasswords = formInputs.filter(input => input.name.includes('password'));
                validationResults.push(validateCase(formPasswords, errorMessages.password_mismatch,
                (input) => input.value != formPasswords[0].value));
            }
        }
        else if (requestType == requestTypes.create || requestType == requestTypes.search){
            validationResults.push(validateCase(formInputs, errorMessages.empty_fields, 
            (input) => input.value.split(/[\s]+/).every(splittedItem => splittedItem == '')));
        }

        let i = 0;
        let isErrorFound = false;
        for (i = 0; i < validationResults.length && !isErrorFound; ++i){
            isErrorFound = validationResults[i].error_message != "";
        }
        
        return validationResults[--i];
    }

    return [validateForm, updateInputs];
}

export default useFormValidation;