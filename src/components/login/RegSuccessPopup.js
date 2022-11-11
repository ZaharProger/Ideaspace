import React, { useEffect } from 'react';

const RegSuccessPopup = () => {
    useEffect(() => {
        const popupCloseButton = document.getElementById('popup-close-button')
        if (popupCloseButton != null){
            popupCloseButton.onclick = () => {
                document.getElementById('Reg-success-popup').classList.replace('active-animated', 'hidden');
            }
        }
    })

    return(
        <div id="Reg-success-popup" className='position-fixed w-100 flex-row hidden'>
            <span className="mt-3 mb-2 w-100">Поздравляем! Вы успешно зарегистрировались в Ideaspace!</span>
            <i id="popup-close-button" className="fa-regular fa-xmark mt-auto mb-auto ms-1 me-3"></i>
        </div>
    )
}

export default RegSuccessPopup;