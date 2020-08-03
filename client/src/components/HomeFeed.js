import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from './CurrentUserContext';

import Tweet from './Tweet';
import StatusInput from './homeFeed/StatusInput';
import { FetchData } from '../hooks';

const HomeFeed = () => {
    const { status } = React.useContext(CurrentUserContext);

    const [tweetsData, setTweetsData] = useState(null);

    FetchData(`/api/me/home-feed`, setTweetsData, status);    

        return (
            <>
                <StatusInput />
                {tweetsData ? tweetsData.tweetIds.map(id => {
                    return <Tweet key={`homeFeedTweet-${id}`} data={tweetsData.tweetsById[id]} />;
                })
                : <h2>Loading...</h2>}
            </>
        );

};

export default HomeFeed;