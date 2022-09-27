import React from 'react';

import '../../styles/login.css';
import LoginForm from './LoginForm';
import RegFormWrap from './RegFormWrap';

const LoginWrap = () => {
  return (
    <div id="Login-wrap" className="d-flex">
        <LoginForm />
        <RegFormWrap />
    </div>
  )
}

export default LoginWrap;