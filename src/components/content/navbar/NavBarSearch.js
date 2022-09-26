import React from 'react';

const NavBarSearch = () => {
    return(
        <div id="Navbar-search" className="d-flex flex-row flex-grow-1 pb-4 pe-2 ps-2 w-100">
            <input type="text" autoComplete="off" placeholder="Логин для поиска" className="input-placeholder w-100"></input>
        </div>
    )
}

export default NavBarSearch;