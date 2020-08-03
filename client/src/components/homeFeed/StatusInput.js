import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../CurrentUserContext';
import { MAX_CHAR_STATUS } from '../../constants';

const StatusInput = () => {
    const { avatarSrc } = useContext(CurrentUserContext).currentUser;
    const [charLeft, setCharLeft] = useState(MAX_CHAR_STATUS);

    const handleTyping = (e) => {
        setCharLeft(MAX_CHAR_STATUS - e.target.value.length);
    };

    return (
        <>
            <img src={avatarSrc} />
            <textarea placeholder="What's happening?" onChange={(e) => handleTyping(e)}/>
            <span>{charLeft}characters</span>
            <button>Meow</button>
        </>
    );

};

export default StatusInput;