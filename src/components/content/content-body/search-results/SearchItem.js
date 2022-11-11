import React from 'react';

import userIcon from '../../../../pics/user-icon-post.svg';

const SearchItem = (props) => {
    return(
        <div className="Search-item d-flex flex-row">
            <img src={ userIcon } alt="user icon" className="m-2 p-2 col-2" />
            <span className="ms-3 mt-auto mb-auto me-2">{ props.item_data.user_login }</span>
        </div>
    )
}

export default SearchItem;