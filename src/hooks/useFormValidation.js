import { requestTypes, errorMessages } from "../globalConstants";

const useFormValidation = () => {
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

    return function validateForm(formInputs, requestType) {
        let validationResults = [];

        validationResults.push(validateCase(formInputs, errorMessages.empty_fields, (input) => input.value == ""));
        validationResults.push(validateCase(formInputs, errorMessages.invalid_login,
            (input) => input.name == 'login' && input.value.includes(" ")));

        if (requestType == requestTypes.reg){
            validationResults.push(validateCase(formInputs, errorMessages.invalid_password,
            (input) => input.name == 'password' && input.value.length < 8));

            const formPasswords = formInputs.filter(input => input.name.includes('password'));
            validationResults.push(validateCase(formPasswords, errorMessages.password_mismatch,
            (input) => input.value != formPasswords[0].value));
        }

        let i = 0;
        let isErrorFound = false;
        for (i = 0; i < validationResults.length && !isErrorFound; ++i){
            isErrorFound = validationResults[i].error_message != "";
        }
        
        return validationResults[--i];
    }
}

export default useFormValidation;