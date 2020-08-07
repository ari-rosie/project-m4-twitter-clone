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
            <div>{charLeft}characters</div>
            <button onClick={() => handleSendStatus()}>Meow</button>
        </Wrapper>
    );

};

const Wrapper = styled.div`
    textarea {
        border: none;
        resize: none;
        width: 400px;
    }

    button {
        background-color: ${COLORS.primary};
        color: white;
    }
`;

const Avatar = styled.img`
    width: 60px;
    border-radius: 50%;
`;



export default StatusInput;