import React, { useContext } from 'react';
import { 
    NavLink
} from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as PicName } from '../assets/logo.svg';
import { LOGO, COLORS, NAV_ICON_SIZE } from '../constants';
import { IconHome, IconProfile, IconNotifications, IconBookmarks } from '../assets/Icons';
import { CurrentUserContext } from './CurrentUserContext';



const Sidebar = () => {
    const { currentUser } = useContext(CurrentUserContext);
    return (
            <Nav>
                <PicName viewBox={'15 0 90 90'} style={{width: LOGO.sidebarSize}}/>
                <ul>
                    <li><IconHome size={NAV_ICON_SIZE} /><NavigationLink exact to='/'>Home</NavigationLink></li>
                    <li><IconProfile size={NAV_ICON_SIZE}/><NavigationLink to={currentUser ? '/me' : '/not-logged-in'}>Profile</NavigationLink></li>
                    <li><IconNotifications size={NAV_ICON_SIZE}/><NavigationLink to='/notifications'>Notifications</NavigationLink></li>
                    <li><IconBookmarks size={NAV_ICON_SIZE}/><NavigationLink to='/bookmarks'>Bookmarks</NavigationLink></li>
                </ul>
            </Nav>
    );
};

const Nav = styled.nav`
    padding: 20px 50px 100px 50px;
    display: flex;
    flex-direction: column;

    li {
        border-radius: 15px;
        min-width: 150px;

    }

    li:hover {
        background-color: ${COLORS.light_primary};

    }


`;

const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    padding: 5px 10px;

    &.active {
        color: ${COLORS.primary};
    }

`;

export default Sidebar;