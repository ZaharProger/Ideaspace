import { useParams } from "react-router-dom";

import { requestTypes } from "../globalConstants";

const useForm = () => {
    const params = useParams();

    return function(formFields, requestType){
        const form = new FormData();
        formFields.forEach(formField => {
            let fieldValue = null;
            if (formField.name == 'UserBirthday'){
                if (formField.value != ''){
                    const splittedDate = formField.value.split('.');
                    fieldValue = Math.floor(new Date([splittedDate[2], splittedDate[1], splittedDate[0]]
                    .join('-')).getTime() / 1000);
                }
            }
            else{
                fieldValue = formField.value;
            }

            if (fieldValue !== null){
                form.append(formField.name, fieldValue);
            }
        })

        if (requestType == requestTypes.create){
            const currentDate = new Date();
            form.append('CreationDate', Math.floor(currentDate.getTime() / 1000));
            form.append('CreationTime', currentDate.getHours() * 3600 + currentDate.getMinutes() * 60);
        }
        else if (requestType == requestTypes.edit){
            form.append('PostId', params.id);
        }

        return form;
    }
}

export default useForm;