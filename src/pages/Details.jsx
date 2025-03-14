import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import capital from '../assets/city-map.png'
import population from '../assets/population.png'
import area from '../assets/area.png'
import currencyIcon from '../assets/currencies.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Details = () => {
    const { countries } = useContext(DataContext)
    const { id } = useParams();
    const [country, setCountry] = useState(null)
    useEffect(() => {
        setCountry(countries.find((country) => country.cca3 === id))

    }, [countries, id])

    const [currency, setCurrency] = useState([])
    useEffect(() => {
        if (country && country.currencies) {
            setCurrency(Object.entries(country.currencies).map(([code, details]) => (
                { code, name: details.name, symbol: details.symbol }
            )))
        }

    }, [country])

    return (
        country ?
            <div className="flex justify-center items-center min-h-screen mt-10 gap-10">
                <div className="p-6 flex flex-col bg-slate-50 w-full max-w-md shadow-lg rounded-xl text-center">

                    <div className="h-40 w-64 mx-auto">
                        <img src={country.flags.png} alt="flag" className="w-full h-full object-cover rounded-md" />
                    </div>


                    <h1 className="text-3xl font-bold text-gray-900 mt-4">{country.name.common}</h1>
                    <a href={country.maps.googleMaps} target='_blank' className='text-cyan-600 underline flex self-center gap-1 hover:text-orange-500 hover:scale-105 transition-all duration-500'>Open Map<FaExternalLinkAlt /></a>


                    <div className="mt-6 grid gap-4">

                        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm">
                            <img src={capital} alt="capital city" className="h-10 w-10" />
                            <h3 className="text-lg font-semibold text-gray-700">{country.capital || "N/A"}</h3>
                        </div>


                        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm">
                            <img src={population} alt="population" className="h-10 w-10" />
                            <h3 className="text-lg font-semibold text-gray-700">{country.population.toLocaleString()}</h3>
                        </div>


                        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm">
                            <img src={area} alt="area" className="h-10 w-10" />
                            <h3 className="text-lg font-semibold text-gray-700">{country.area.toLocaleString()} km<sup>2</sup></h3>
                        </div>

                        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm">
                            <img src={currencyIcon} alt="area" className="h-10 w-10" />
                            <div>
                                {currency.length > 0 ? currency.map((curr) => (
                                    <h3 key={curr.code} className="text-lg font-semibold text-gray-700 text-left">{curr.name} ({curr.symbol})</h3>
                                )) : (
                                    <h3 className="text-lg font-semibold text-gray-700">No currency available</h3>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null
    )
}

export default Details
