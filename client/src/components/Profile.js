import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { CurrentUserContext } from './CurrentUserContext';
import ProfilePosts from './profile/ProfilePosts';

const Profile = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const { profileId } = useParams();
    const [profileFeed, setProfileFeed] = useState(currentUser);

    useEffect(() => {
        if (profileId !== 'me') {
            const fetchData = async () => {
                const res = await fetch(`/api/${profileId}/profile`);
                const profileData = await res.json();
                setProfileFeed(profileData.profile);
            }

            fetchData();
        } else 
            setProfileFeed(currentUser);
    }, [profileId]);
    console.log(profileFeed);
    const { 
        handle,
        displayName, 
        avatarSrc, 
        bannerSrc, 
        location, 
        bio, 
        numFollowing, numFollowers, 
        isFollowingYou, isBeingFollowedByYou
    } = profileFeed;
    

    return (
        <>
            <img src={bannerSrc}/>
            <h1>{displayName}</h1>
            <img src={avatarSrc}/>
            <p>{location}</p>
            <p>{bio}</p>
            <p><span>{numFollowing}</span>Following</p>
            <p><span>{numFollowers}</span>Followers</p>
            <ProfilePosts userHandle={handle}/>
        </>
    );
};

export default Profile;