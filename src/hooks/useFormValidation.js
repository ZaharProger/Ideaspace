const useFormValidation = () => {
    return function(formId){
        const formInputs = Array.from(document.getElementById(formId).getElementsByTagName('input'));

        const emptyInputs = formInputs.filter(input => input.value == "");
        const invalidLoginInput = formInputs.filter(input => input.name == 'login' && input.value.includes(" "));

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