import React from 'react'

import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import '../../../../styles/profile.css';

const Profile = () => {
    return(
        <div id="Profile" className="d-flex flex-column align-items-center p-3 col-5">
            <ProfileHeader />
            <ProfileContent />
            <ProfileFooter />
        </div>
    )
}

export default Profile;