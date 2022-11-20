import React, { useContext } from 'react';

import { contentContext } from '../../../contexts';

const FooterButtons = (props) => {
    const enableSettings = useContext(contentContext).enable_settings;
    const buttonsLayout = enableSettings? 'enabled-settings' : 'disabled-settings';

    return (
        <div className={ `Footer-buttons d-flex mt-2 mb-2 ${buttonsLayout}` }>
        {
            props.buttons
        }
        </div>
    )
}

export default FooterButtons;