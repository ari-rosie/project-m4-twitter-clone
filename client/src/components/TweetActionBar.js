import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {heart} from 'react-icons-kit/feather/heart';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import {repeat} from 'react-icons-kit/feather/repeat';
import {share} from 'react-icons-kit/feather/share'


const TweetActionBar = () => {
    
    return(
        <Wrapper>
            <Icon icon={messageCircle} size={24}/>
            <Icon icon={repeat} size={24}/>
            <Icon icon={heart} size={24}/>
            <Icon icon={share} size={24}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 300px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
`;

export default TweetActionBar;