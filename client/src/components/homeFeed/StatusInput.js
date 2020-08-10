import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { CurrentUserContext } from '../CurrentUserContext';
import { MAX_CHAR_STATUS, COLORS } from '../../constants';

const StatusInput = () => {
    const { avatarSrc } = useContext(CurrentUserContext).currentUser;
    const [charLeft, setCharLeft] = useState(MAX_CHAR_STATUS);
    const [input, setInput] = useState('');

    const handleTyping = (e) => {
        setCharLeft(MAX_CHAR_STATUS - e.target.value.length);
        setInput(e.target.value);
    };


    const handleSendStatus = async () => {
        setInput('');
        const reqObj = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({status: input})
        }
        const res = await fetch('/api/tweet', reqObj);
        const data = await res.json();
        window.location.reload();
        
    };

    return (
        <Wrapper>  
            <h1>Home</h1>
            <Avatar src={avatarSrc} alt={'avatar'}/>
            <textarea placeholder="What's happening?" value={input} onChange={(e) => handleTyping(e)}/>
            <Char>
                {charLeft} characters
                <button onClick={() => handleSendStatus()}>Meow</button>
            </Char>
        </Wrapper>
    );

};

const Wrapper = styled.div`
    padding-bottom: 20px;
    textarea {
        border: none;
        resize: none;
        width: 400px;

        &:focus {
            outline: none;
        }

    }

    button {
        background-color: ${COLORS.light_primary};
        color: white;
        margin-left: 20px;
        border-radius: 8px;
        border: none;
        padding: 3px 2px;
        font-weight: bold;
    }

    h1 {
        padding: 30px 10px;
        border-bottom: grey solid 1px;
        font-size: 1.3em;
        margin-bottom: 20px;
    }
`;

const Avatar = styled.img`
    width: 60px;
    border-radius: 50%;
    padding-left: 10px;
`;

const Char = styled.div`
    color: lightgray;
    font-size: 0.7em;
    text-align: right;
    padding-right: 20px;
`;

export default StatusInput;