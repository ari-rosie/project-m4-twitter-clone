import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { CurrentUserContext } from './CurrentUserContext';
import ProfilePosts from './profile/ProfilePosts';
import { FetchData } from '../hooks';

const Profile = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const { profileId } = useParams();
    const [profileFeed, setProfileFeed] = useState(currentUser);
    const { profile } = profileFeed;

    FetchData(`/api/${profileId}/profile`, setProfileFeed, profileId);

    return (
        <>
            {profile ? 
            <>
            <img src={profile.bannerSrc} alt={'banner'}/>
            <h1>{profile.displayName} </h1>
            <img src={profile.avatarSrc} alt={'avatar'}/>
            <p>{profile.location}</p>
            <p>{profile.bio}</p>
            <p><span>{profile.numFollowing}</span>Following</p>
            <p><span>{profile.numFollowers}</span>Followers</p>
            <ProfilePosts userHandle={profile.handle}/>
            </>
            : <h2>Loading...</h2>}
        </>
    );
};

export default Profile;