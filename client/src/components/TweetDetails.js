import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

import TweetActionBar from './TweetActionBar';
import { FetchData } from '../hooks';

const TweetDetails = () => {
    const {tweetId} = useParams();
    const [tweet, setTweet] = useState(null);

    FetchData(`/api/tweet/${tweetId}`, setTweet, tweetId);

    return (
        <>
            {tweet === null && <h2>Loading...</h2>}
            {
                tweet &&
                <>
                    <div>
                        <Author>
                            <div>                    
                                <ProfilePic src={tweet.tweet.author.avatarSrc}/>
                                <Link to={`/${tweet.tweet.author.handle}`}>{tweet.tweet.author.displayName}</Link>
                            </div>
                            <span>@{tweet.tweet.author.handle} - {moment(tweet.tweet.timestamp).format('MMM Do')}</span>
                        </Author>
                        <Status>{tweet.tweet.status}</Status>
                        <div>{tweet.tweet.numLikes} Likes {tweet.tweet.numRetweets} Retweets</div>
                        {tweet.tweet.media.length > 0 && <PostImg src={tweet.tweet.media[0].url}/>}
                        <TweetActionBar />
                    </div>

                    {/* <div>{tweet.tweet.status}</div>
                    <div><Link to={`/${tweet.tweet.author.handle}`}>{tweet.tweet.author.displayName}</Link></div>
                    <div>{tweet.tweet.timestamp}</div>
                    <div>{tweet.tweet.numLikes} Likes {tweet.tweet.numRetweets} Retweets</div>
                    <TweetActionBar /> */}
                </>
            }

        </>

    );
};


const ProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px 10px 0 0;
    
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
    div {
        font-weight: bold;

    }
`;

const Status = styled.div`
    padding-bottom: 20px;
`;

export default TweetDetails;