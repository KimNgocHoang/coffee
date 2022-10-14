import React, { useState, useEffect, useContext, useCallback } from 'react';


const url = 'https://api.sampleapis.com/coffee/hot';
const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [loading, setLoading] = useState(false);
    const [coffees, setCoffees] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    const fetchDrinks = useCallback (async () => {
        setLoading(true);
        try {
            const response = await fetch(url)
            const data = await response.json();
            // console.log(data);
            if (searchItem !== '') {
                const cf = data.filter((item) => {
                    return Object.values(item.title).join('').toLowerCase().includes(searchItem.toLowerCase());
                });
                setCoffees(cf)
            }
            else {
                setCoffees(data);
            }
            setLoading(false);
            // setCoffees(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [searchItem])
    useEffect(() => {
        fetchDrinks();
    }, [searchItem, fetchDrinks])
    return (
        <AppContext.Provider
            value={{
                loading, coffees, searchItem, setSearchItem
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider } 










