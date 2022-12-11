import React, { useContext } from 'react';

import { contentContext, postContext } from '../../../contexts';
import { buttons } from '../../../globalConstants';

const FooterButtons = (props) => {
    const enableSettings = useContext(contentContext).enable_settings;
    const postContextData = useContext(postContext);
    const buttonsLayout = enableSettings? 'enabled-settings' : 'disabled-settings';

    return (
        <div className={ `Footer-buttons d-flex mt-2 mb-2 ${buttonsLayout}` }>
        {
            props.buttons.filter(button => postContextData === null? button.key != buttons.edit_post : button.key != buttons.create_post)
        }
        </div>
    )
}

export default FooterButtons;