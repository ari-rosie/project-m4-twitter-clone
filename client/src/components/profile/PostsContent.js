import React, { useState } from 'react';
import { FetchData } from '../../hooks';
import Tweet from '../Tweet';

const PostsContent = ({content, userHandle}) => {
    const [feed, setFeed] = useState(null);
    FetchData(`/api/${userHandle}/feed`, setFeed, userHandle);
    if (feed) console.log(feed);
    return (
        <>
            {
                content === 'tweets' &&
                    <>
                        {feed === null && <>Loading...</>}
            
                        {
                            feed &&
                                feed.tweetIds.map(id => {
                                    return <Tweet data={feed.tweetsById[id]}/>;
                                })
                        }

                    </>
            }
            {content !== 'tweets' && <h3>{content}</h3>}
        </>
    );
};

export default PostsContent;