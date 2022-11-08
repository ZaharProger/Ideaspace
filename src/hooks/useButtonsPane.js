import { useSelector } from "react-redux";

import { buttons, paneTemplates, reduxKeys, routes, requestTypes } from "../globalConstants";
import NavBarListItem from "../components/content/navbar/NavBarListItem";
import useRedux from "./useRedux";
import useFormValidation from './useFormValidation';
import useForm from './useForm';
import useRedirection from './useRedirection';


const useButtonsPane = (template) => {
    const makeForm = useForm();
    const [validate, updateInputs]= useFormValidation();
    const signOutCallback = useRedux(reduxKeys.sign_out);
    const updateUserCallback = useRedux(reduxKeys.get_user);
    const currentUser = useSelector(state => state.user_data);
    const redirect = useRedirection();

    const buttonsPane = [];
    for (let i = 0; i < template.length; ++i){
        if (template == paneTemplates.navigation){
            const { key , icon, caption, route } = template[i];
            let callback = null;
            switch (key){
                case buttons.settings:
                case buttons.create:
                    callback = () => redirect(route);
                    break;
                case buttons.sign_out:
                    callback = async () => {
                        const response = await fetch('/api/Users?', {
                            method: 'DELETE'
                        });

                        if (response.ok){
                            signOutCallback();
                            redirect(route);
                        }
                    }
                    break;
            }

            buttonsPane.push(
            <NavBarListItem key={ key } navbar_item_props={{
                icon: icon,
                caption: caption,
                route: route,
                callback: callback
            }}/>);
        }
        else if (template == paneTemplates.profile_footer){
            const { key, caption } = template[i];
            let callback = null;
            switch(key){
                case buttons.save_profile:
                    callback = async () => {
                        const saveButton = document.getElementById('save-button');
                        const prevCaption = saveButton.innerText;
                        saveButton.innerText = 'Подождите...';

                        const profileInputs = Array.from(document.getElementById('Profile').querySelectorAll('input, textarea'));
                        const profileForm = makeForm(profileInputs, requestTypes.edit);

                        const response = await fetch('/api/Users', {
                            method: 'PUT',
                            body: profileForm
                        });

                        saveButton.innerText = prevCaption;
                        if (response.ok){
                            const responseData = await response.json();
                            if (responseData.result){
                                updateUserCallback({
                                    ...currentUser,
                                    user_status: profileForm.get('UserStatus'),
                                    user_birthday: profileForm.get('UserBirthday')
                                });
                                redirect(routes.main);
                            }
                        }
                    }
                    break;
                case buttons.cancel:
                    callback = () => redirect(routes.main);
                    break;
            }

            buttonsPane.push(<button id={ key == buttons.save_profile? 'save-button' : '' } type="button" key={ key } className="p-2"
            onClick={ () => callback() }>{ caption }</button>);
        }
        else if (template == paneTemplates.post_footer){
            const { key, caption } = template[i];
            let callback = null;

            switch(key){
                case buttons.create_post:
                    callback = async () => {
                        const createButton = document.getElementById('create-button');
                        const prevCaption = createButton.innerText;
                        createButton.innerText = 'Подождите...';
                        
                        const inputFields = Array.from(document.getElementById('Wall').querySelectorAll('textarea'));
                        const validationResult = validate(inputFields, requestTypes.create);

                        document.getElementById('error-message').innerText = validationResult.error_message;
                        updateInputs(inputFields, validationResult.error_inputs);
                        if (validationResult.error_message == ''){
                            const postForm = makeForm(inputFields, requestTypes.create);

                            const response = await fetch('/api/Posts', {
                                method: 'POST',
                                body: postForm
                            });

                            createButton.innerText = prevCaption;
                            
                            if (response.ok){
                                const responseData = await response.json();
                                if (responseData.result){
                                    redirect(routes.main);
                                }
                            }
                        }
                    }
                    break;
                case buttons.cancel:
                    callback = () => redirect(routes.main);
                    break;
            }

            buttonsPane.push(<button id={ key == buttons.create_post? 'create-button' : '' } type="button" key={ key } 
            className='p-2' onClick={ () => callback() }>{ caption }</button>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;