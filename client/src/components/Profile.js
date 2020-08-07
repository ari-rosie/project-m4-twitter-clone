import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import moment from 'moment';

import { CurrentUserContext } from './CurrentUserContext';
import ProfilePosts from './profile/ProfilePosts';
import { FetchData } from '../hooks';

const Profile = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const { profileId } = useParams();
    const [profileFeed, setProfileFeed] = useState(currentUser);
    const { profile } = profileFeed;

    FetchData(`/api/${profileId}/profile`, setProfileFeed, profileId);
    console.log(profile);

    return (
        <>
            {profile ? 
            <>
            <Banner src={profile.bannerSrc} />
            <ProfilePic src={profile.avatarSrc} alt={'avatar'}/>
            <ProfileDescription>
                <h1>{profile.displayName} </h1>
                <Handle>
                    @{profile.handle}
                    {profile.isFollowingYou && <span>Follows you</span>}
                </Handle>
                <Bio>{profile.bio}</Bio>
                <Location>{profile.location}<span>Joined {moment(profile.joined).format('MMMM YYYY')}</span></Location>
                <Following><span>{profile.numFollowing}</span> Following  <span>{profile.numFollowers}</span> Followers</Following>
            </ProfileDescription>
            <ProfilePosts userHandle={profile.handle}/>
            </>
            : <h2>Loading...</h2>}
        </>
    );
};

const Banner = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    height: 300px;
`;

const ProfilePic = styled.img`
    width: 200px;
    border-radius: 50%;
    border: white 5px solid;
    position: absolute;
    top: 200px;
    margin-left: 30px;
`;

const ProfileDescription = styled.div`
    margin-top: 100px;
    padding: 20px;

    h1 {
        font-weight: bold;
        font-size: 1.2em;
    }
`;

const Handle = styled.p`
    color: grey;
    font-size: 0.8em;
    margin-top: 5px;

    span {
        font-size: 0.75em;
        border-radius: 4px;
        background-color: lightgray;
        margin-left: 20px;
        padding: 1px 3px;
    }
`;

const Bio = styled.p`
    font-weight: bold;
    padding-top: 5px;
`;

const Location = styled.p`
    padding-top: 5px;
    color: grey;
    font-size: 0.8em;

    span {
        margin-left: 20px;
    }
`;

const Following = styled.p`
    color: grey;
    font-size: 0.8em;
    padding-top: 5px;

    span {
        color: black;
        font-weight: bold;
    }
`;

export default Profile;