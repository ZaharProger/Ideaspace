import React from "react";

const ErrorMessage = () => {
    return(
        <div id="Error-message" className="d-flex">
            <p>
                <span>Ой, извините</span>
                <br />
                Похоже запрашиваемый ресурс не найден...
                <br />
                Пока вы можете запросить другой ресурс. В Ideaspace есть много всего интересного! 
                Если что-нибудь здесь появится, вы сразу же об этом узнаете
            </p>
        </div>
    );
}

export default ErrorMessage;