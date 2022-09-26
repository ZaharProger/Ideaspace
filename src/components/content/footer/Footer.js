import React from 'react'

import FooterCaption from './FooterCaption';
import FooterContacts from './FooterContacts';
import '../../../styles/footer.css';

const Footer = () => {
    return(
        <div id="Footer" className="d-flex flex-row align-items-center pt-3 pb-3 ps-4 pe-4">
            <FooterCaption />
            <FooterContacts />
        </div>
    )
}

export default Footer;