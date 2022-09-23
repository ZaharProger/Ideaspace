import React from "react";

import '../../styles/error.css';
import ErrorMessage from './ErrorMessage';
import ErrorPicture from './ErrorPicture';

const ErrorWrap = () => {
    return(
        <div id="Error-wrap" className="d-flex flex-column align-items-center m-auto">
            <ErrorMessage />
            <ErrorPicture />
        </div>
    );
}

export default ErrorWrap;