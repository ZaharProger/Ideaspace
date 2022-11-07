import React from 'react';

const NavBarSearch = () => {
    //console.log('navbar-search');
    return(
        <div id="Navbar-search" className="d-flex flex-column flex-grow-1 pb-4 pe-2 ps-2 w-100">
            <input id="search-field" type="text" autoComplete="off" placeholder="Логин для поиска"
            className="input-placeholder w-100"></input>
        </div>
    )
}

export default NavBarSearch;