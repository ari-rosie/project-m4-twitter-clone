import React from 'react';

import { Icon } from 'react-icons-kit';
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

const Error500 = () => {
    return (
        <>
            <Icon icon={bomb} />
            <h1>Something went wrong!</h1>
            <p>Please refresh the page.</p>
        </>
    );  
};

export default Error500;
