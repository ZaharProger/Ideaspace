import React from 'react';
import { useSelector } from 'react-redux';

import userIcon from '../../../../pics/user-icon-post.svg';

const SearchItem = (props) => {
    const profileLogin = useSelector(state => state.profile_data.user_login);
    const userLogin = props.item_data.user_login;

    return(
        <div className="Search-item d-flex flex-row">
            <img src={ userIcon } alt="user icon" className="m-2 p-2 col-2" />
            <span className="ms-3 mt-auto mb-auto me-2">{ userLogin }</span>
            {
                profileLogin == userLogin? <i className='mt-auto mb-auto me-4 ms-auto'>Это Вы</i> : null
            }
        </div>
    )
}

export default SearchItem;