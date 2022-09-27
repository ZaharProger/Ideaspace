import React from 'react';

import appLogo from '../../pics/app-logo.svg';

const LoginHeader = () => {
    return (
        <div id="Login-header" className="d-flex flex-row align-items-center">
            <img src={ appLogo } alt="app-logo" className="pe-2" />
            <label><span>Ideaspace</span><br />Войдите в приложение</label>
        </div>
    )
}

export default LoginHeader;