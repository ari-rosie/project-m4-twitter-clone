import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
                    <div>{tweet.tweet.status}</div>
                    <div><Link to={`/${tweet.tweet.author.handle}`}>{tweet.tweet.author.displayName}</Link></div>
                    <div>{tweet.tweet.timestamp}</div>
                    <div>{tweet.tweet.numLikes} Likes {tweet.tweet.numRetweets} Retweets</div>
                    <TweetActionBar />
                </>
            }

        </>

    );
};

export default TweetDetails;