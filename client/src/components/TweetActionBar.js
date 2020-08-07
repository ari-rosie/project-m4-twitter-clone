import React from 'react';
import { Icon } from 'react-icons-kit';
import {heart} from 'react-icons-kit/feather/heart';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import {repeat} from 'react-icons-kit/feather/repeat';
import {share} from 'react-icons-kit/feather/share'


const TweetActionBar = () => {
    
    return(
        <div>
            <Icon icon={messageCircle} />
            <Icon icon={repeat} />
            <Icon icon={heart} />
            <Icon icon={share} />
        </div>
    );
};

export default TweetActionBar;