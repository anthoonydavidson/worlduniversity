import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then(function (response) {
           setCountries(response.data)
        })
        .catch(function (error) {
            
            console.log(error);
        })

    }, [])


    return (
        <DataContext.Provider value={{ countries }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider, DataContext }