import React, { useState } from 'react';
import styled from 'styled-components';

import PostsContent from './PostsContent';
import { COLORS } from '../../constants';

const ProfilePosts = ({userHandle}) => {
    const [content, setContent] = useState('tweets');

    const handleSelectContent = (selection) => {
        setContent(selection);
    }

    return (
        <>
            <Menu>
                <li onClick={() => handleSelectContent('tweets')}>Tweets</li>
                <li onClick={() => handleSelectContent('media')}>Media</li>
                <li onClick={() => handleSelectContent('likes')}>Likes</li>
            </Menu>
            <PostsContent content={content} userHandle={userHandle}/>
        </>
    );
};

const Menu = styled.ul`
    display: flex;
    cursor: default;

    li {
        width: 100%;
        padding-bottom: 15px;
        text-align: center;
        border-bottom: white solid 2px;


        &:hover {
            border-bottom: ${COLORS.primary} solid 2px;
        }
    }
`;

export default ProfilePosts;