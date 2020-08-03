import React from 'react';


// fetch data from the API and stores it in a state variable
export const FetchData = (apiUrl, setAction, renderArg) => {
    React.useEffect(() => {
        try {
            const getData = async () => {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setAction(data);
            }
            getData();    
        } catch (error) {
            console.log(error);
        }

    }, [renderArg]);


};