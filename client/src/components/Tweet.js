import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import TweetActionBar from './TweetActionBar';

const Tweet = ({data}) => {
    const { id, status, timestamp, author, numLikes, numRetweets, author: {avatarSrc}, media } = data;
    let history = useHistory();

    const handleClick = (url) => {
        history.push(url);
    };

    return (
        <Wrapper onClick={() => handleClick(`/tweet/${id}`)}> 
            <ProfilePic src={avatarSrc}/>
            <div>
                <Author>
                    <Name onClick={(event) => {handleClick(`/${author.handle}`); event.stopPropagation();}}>{author.displayName}</Name>
                    <span>@{author.handle} - {moment(timestamp).format('MMM Do')}</span>
                </Author>
                <Status>{status}</Status>
                <div>{numLikes} Likes {numRetweets} Retweets</div>
                {media.length > 0 && <PostImg src={media[0].url}/>}
                <TweetActionBar />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: solid 0.5px grey;
    padding: 10px;
    display: flex;
    cursor: default;
`;

const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const PostImg = styled.img`
    max-width: 300px;
    border-radius: 8px;
`;

const Author = styled.div`
    margin-bottom: 20px;
    span {
        color: gray;
    }
`;

const Status = styled.div`
    padding-bottom: 20px;
`;

const Name = styled.div`
    font-weight: bold;
`;

export default Tweet;