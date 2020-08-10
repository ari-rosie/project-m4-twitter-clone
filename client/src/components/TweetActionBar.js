import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {heart} from 'react-icons-kit/feather/heart';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import {repeat} from 'react-icons-kit/feather/repeat';
import {share} from 'react-icons-kit/feather/share'


const TweetActionBar = ({id, isLiked}) => {
    
    const reqObj = {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({like: !isLiked}),
        json: true
    }
    
    const handleLike = () => {
        fetch(`/api/tweet/${id}/like`, reqObj)
        .then(res => res.json())
        .then(res => console.log(res))
        // window.location.reload();
    }

    return(
        <Wrapper>
            <button><Icon icon={messageCircle} size={24}/></button>
            <button><Icon icon={repeat} size={24}/></button>
            <button style={{color: isLiked ? 'pink': 'black'}} onClick={() => handleLike()}><Icon icon={heart} size={24}/></button>
            <button><Icon icon={share} size={24}/></button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 300px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    button {
        border: none;
        background-color: transparent;

        &:focus {
            outline: none;
        }
    }

`;

export default TweetActionBar;