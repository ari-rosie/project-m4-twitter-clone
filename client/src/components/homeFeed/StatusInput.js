import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../CurrentUserContext';
import { MAX_CHAR_STATUS } from '../../constants';

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
        console.log(data);
        
    };

    return (
        <>
            <img src={avatarSrc} alt={'avatar'}/>
            <textarea placeholder="What's happening?" value={input} onChange={(e) => handleTyping(e)}/>
            <span>{charLeft}characters</span>
            <button onClick={() => handleSendStatus()}>Meow</button>
        </>
    );

};

export default StatusInput;