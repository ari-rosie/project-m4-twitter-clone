import React from 'react';
import { Link } from 'react-router-dom';
import TweetActionBar from './TweetActionBar';

const Tweet = ({data}) => {
    const { id, status, timestamp, author, isLiked, isRetweeted, numLikes, numRetweets } = data;
    return (
        <>
            <Link to={`/tweet/${id}`}>
                <div>{status}</div>
                <div><Link to={`/${author.handle}`}>{author.displayName}</Link></div>
                <div>{timestamp}</div>
                <div>{numLikes}{numRetweets}</div>
                {/* <div>{isLiked}</div> */}
                <TweetActionBar />
            </Link>
        </>
    );
};

export default Tweet;