import React, { useEffect, useState } from 'react';

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState('loading');

    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/me/profile`);
                const profile = await res.json();

                setCurrentUser(profile.profile);
                setStatus('idle');
            } catch (err) {
                setStatus(null);
                console.log(status);
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    

    return <CurrentUserContext.Provider value={{currentUser, status, setStatus}}>{children}</CurrentUserContext.Provider>
};

