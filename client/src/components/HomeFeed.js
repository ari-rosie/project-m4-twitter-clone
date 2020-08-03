import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from './CurrentUserContext';

import Tweet from './Tweet';
import { FetchData } from '../hooks';

const HomeFeed = () => {
    const { status } = React.useContext(CurrentUserContext);

    const [tweetsData, setTweetsData] = useState(null);

    FetchData(`/api/me/home-feed`, setTweetsData, status);    

    if (tweetsData){
        return (
            <>
                {tweetsData.tweetIds.map(id => {
                    return <Tweet key={`homeFeedTweet-${id}`} data={tweetsData.tweetsById[id]} />;
                })};
            </>
        );
    } else 
        return (
            <>
                Loading...
            </>
        );

};

export default HomeFeed;