import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import TweetActionBar from './TweetActionBar';

const Tweet = ({data}) => {
    const { id, status, timestamp, author, numLikes, numRetweets } = data;
    let history = useHistory();

    const handleClick = (url) => {
        history.push(url);
    };

    return (
        <Wrapper onClick={() => handleClick(`/tweet/${id}`)}> 
            <div>{status}</div>
            <Name onClick={(event) => {handleClick(`/${author.handle}`); event.stopPropagation();}}>{author.displayName}</Name>
            <div>{timestamp}</div>
            <div>{numLikes}{numRetweets}</div>
            {/* <div>{isLiked}</div> */}
            <TweetActionBar />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: solid 1px grey;
    border-radius: 5px;
    padding: 10px 30px;
    margin: 10px 0;
`;

const Name = styled.div`
`;

export default Tweet;