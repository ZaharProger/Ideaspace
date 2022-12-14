import useFormValidation from "./useFormValidation";
import useRedirection from './useRedirection';
import { requestTypes, routes } from "../globalConstants";

const useRegAuth = () => {
    const redirect = useRedirection();
    const [validate, updateInputs] = useFormValidation();

    function performResultAction(requestType){
        switch(requestType){
            case requestTypes.auth:
                redirect(routes.main);
                break;
            case requestTypes.reg:
                const regSuccessPopup = document.getElementById('Reg-success-popup');
                if (regSuccessPopup.classList.contains('active-animated')){
                    regSuccessPopup.classList.replace('active-animated', 'hidden');
                }
                setTimeout(() => regSuccessPopup.classList.replace('hidden', 'active-animated'), 100);
                document.getElementById('Reg-ref-button').onclick(new MouseEvent('mousedown'), true);
                break;
        }
    }

    return async function(form, requestType){
        const formInputs = Array.from(form.getElementsByTagName('input'));
        let { error_message: errorMessage, error_inputs: errorInputs } = validate(formInputs, requestType);
        
        if (errorMessage == ""){
            const formData = new FormData(form);        
            formData.delete("repeat-password");
            formData.append('requestType', requestType);
            
            const formButton = Array.from(form.getElementsByTagName('button'))[0];
            const prevButtonText = formButton.innerText;
            formButton.innerText = 'Подождите...';

            const response = await fetch('/api/Users', {
                method: 'POST',
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