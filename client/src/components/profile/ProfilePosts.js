import React, { useState } from 'react';

import PostsContent from './PostsContent';

const ProfilePosts = ({userHandle}) => {
    const [content, setContent] = useState('tweets');

    const handleSelectContent = (selection) => {
        setContent(selection);
    }

    return (
        <>
            <ul>
                <li onClick={() => handleSelectContent('tweets')}>Tweets</li>
                <li onClick={() => handleSelectContent('media')}>Media</li>
                <li onClick={() => handleSelectContent('likes')}>Likes</li>
            </ul>
            <PostsContent content={content} userHandle={userHandle}/>
        </>
    );
};

export default ProfilePosts;