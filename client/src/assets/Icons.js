import React from 'react';

import { Icon } from 'react-icons-kit';
import {home} from 'react-icons-kit/feather/home';
import {user} from 'react-icons-kit/feather/user';
import {bookmark} from 'react-icons-kit/feather/bookmark';
import {bell} from 'react-icons-kit/feather/bell';

export const IconHome = ({size}) => <Icon size={size} icon={home} />;
export const IconProfile = ({size}) => <Icon size={size} icon={user} />;
export const IconBookmarks = ({size}) => <Icon size={size} icon={bookmark} />;
export const IconNotifications = ({size}) => <Icon size={size} icon={bell} />;
