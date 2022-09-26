import React from 'react';

const NavBarSearch = () => {
    return(
        <div id="Navbar-search" className="d-flex flex-row flex-grow-1 ms-5 me-5 pb-4">
            <input type="text" autoComplete="off" placeholder="Логин для поиска" className="input-placeholder w-100"></input>
        </div>
    )
}

export default NavBarSearch;