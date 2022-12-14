import { useSelector } from "react-redux";

import { buttons, paneTemplates, reduxKeys, routes, requestTypes } from "../globalConstants";
import NavBarListItem from "../components/content/navbar/NavBarListItem";
import useRedux from "./useRedux";
import useFormValidation from './useFormValidation';
import useForm from './useForm';
import useRedirection from './useRedirection';



const useButtonsPane = (template) => {
    const redirect = useRedirection();
    
    const makeForm = useForm();
    const [validate, updateInputs]= useFormValidation();

    const signOutCallback = useRedux(reduxKeys.sign_out);
    const updateUserCallback = useRedux(reduxKeys.profile_data);

    const currentUser = useSelector(state => state.profile_data);

    const buttonsPane = [];
    for (let i = 0; i < template.length; ++i){
        if (template == paneTemplates.navigation){
            const { key , icon, caption, route } = template[i];
            let callback = null;
            switch (key){
                case buttons.settings:
                    callback = () => redirect(route);
                    break;
                case buttons.create:
                    callback = () => redirect(route);
                    break;
                case buttons.liked:
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
                        saveButton.innerText = '??????????????????...';

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
                case buttons.edit_post:
                case buttons.create_post:
                    callback = async () => {
                        const createButton = document.getElementById(key);
                        const prevCaption = createButton.innerText;
                        createButton.innerText = '??????????????????...';
                        
                        const inputFields = Array.from(document.getElementById('Wall').querySelectorAll('textarea'));
                        const validationResult = validate(inputFields, requestTypes.create);

                        document.getElementById('error-message').innerText = validationResult.error_message;
                        updateInputs(inputFields, validationResult.error_inputs);
                        if (validationResult.error_message == ''){
                            const form = makeForm(inputFields, key == buttons.create_post? requestTypes.create : requestTypes.edit);
                            const response = await fetch('/api/Posts', {
                                method: key == buttons.create_post? 'POST' : 'PUT',
                                body: form
                            });
                            
                            if (response.ok){
                                const responseData = await response.json();
                                if (responseData.result){
                                    redirect(routes.main);
                                }
                            }
                        }

                        createButton.innerText = prevCaption;
                    }
                    break;
                case buttons.cancel:
                    callback = () => redirect(routes.main);
                    break;
            }

            buttonsPane.push(<button id={ [buttons.create_post, buttons.edit_post].includes(key)? key : '' } type="button" key={ key } 
            className='p-2' onClick={ () => callback() }>{ caption }</button>);
        }
        else if (template == paneTemplates.post_icons){
            const { key, icon } = template[i];

            buttonsPane.push(<div key={ key } className={`footer-button d-flex flex-row ${ key }${i != 0? ' ms-4' : ''}`}>
                <i className={ `fa-regular ${icon} me-2` }></i>
                <span></span>
            </div>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;