import React, { useEffect } from "react";

const ErrorPicture = () => {
    useEffect(() => {
        const errorFigure = document.createElement('div');

        const errorFigureCaption = document.createElement('p');
        errorFigureCaption.innerText = '404';

        errorFigure.appendChild(errorFigureCaption);
    })

    return(
        <div id="Error-picture" className="d-flex flex-row align-items-center mt-5">
            <div className="error-figure">
                <p>404</p>
            </div>
            <div className="error-figure">
                <p>404</p>
            </div>
            <div className="error-figure">
                <p>404</p>
            </div>
        </div>
    );
}

export default ErrorPicture;