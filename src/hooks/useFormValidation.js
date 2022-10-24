const useFormValidation = () => {
    return function(formId){
        const formInputs = Array.from(document.getElementById(formId).getElementsByTagName('input'));

        const emptyInputs = formInputs.filter(input => input.value == "");
        const invalidLoginInput = formInputs.filter(input => input.name == 'login' && input.value.includes(" "));
        const invalidPasswordLength = formInputs.filter(input => input.name == 'password' && formId == 'Reg-form' && input.value.length < 8);
        const formPasswords = formInputs.filter(input => input.name.includes('password') && formId == 'Reg-form');

        let errorMessage = "";
        let errorInputs = [];
        if (emptyInputs.length != 0){
            errorMessage = "Заполните все поля!";
            errorInputs.push(...emptyInputs);
        }
        else if (invalidLoginInput.length != 0){
            errorMessage = "В логине нельзя использовать пробел!";
            errorInputs.push(invalidLoginInput[0]);
        }
        else if (invalidPasswordLength.length != 0){
            errorMessage = "Длина пароля не менее 8 символов!";
            errorInputs.push(invalidPasswordLength[0]);
        }
        else if (formPasswords.length != 0){
            if (formPasswords[0].value != formPasswords[1].value){
                errorMessage = "Пароли не совпадают!";
                errorInputs.push(...formPasswords);
            }
        }

        if (errorMessage == ""){
            
        }

        formInputs.forEach(input => {
            input.classList.remove('correct', 'incorrect');
            input.classList.add(errorInputs.includes(input)? 'incorrect' : 'correct');
        });

        return errorMessage;
    }
}

export default useFormValidation;