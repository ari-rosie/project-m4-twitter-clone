import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '../globalStyles.js';
import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed.js';
import Profile from './Profile';
import { CurrentUserContext } from './CurrentUserContext.js';
import TweetDetails from './TweetDetails.js';

const App = () => {
  const { status } = useContext(CurrentUserContext);
  return (
    <>
    <GlobalStyle />
      <Router>
        <Page>
          <Sidebar/>
          <MainContent>
            {status === 'idle' ?
            <Switch>
              <Route exact path='/'>
                <HomeFeed/>
              </Route>
              <Route path='/notifications'>notifications</Route>
              <Route path='/bookmarks'>bookmarks</Route>
              <Route path='/tweet/:tweetId'>
                <TweetDetails />
              </Route>
              <Route path='/:profileId'>
                <Profile />
              </Route>
            </Switch>
            : console.log(status)}
          </MainContent>
        </Page>
      </Router>
    </>
  );
};

const Page = styled.div `
  display: flex;
`;

const MainContent = styled.main `
  width: 100%;
`;

export default App;
