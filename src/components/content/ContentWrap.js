import React from "react";

import NavBar from './navbar/NavBar';
import Content from './content-body/Content';

const ContentWrap = () => {
    return (
        <div id="Content-wrap" className="d-flex flex-column align-items-center">
            <NavBar />
            <Content />
        </div>
    )
}

export default ContentWrap;