import React, { useContext, useEffect, useState } from 'react';
import Hero from '../components/Hero.jsx';
import Card from '../components/Card.jsx'
import { DataContext } from '../contexts/DataContext';

const Home = () => {
    const { countries } = useContext(DataContext)
    const [top10Countries, setTop10Countries] = useState([])
    useEffect(() => {
        setTop10Countries(countries.sort((a, b) => b.population - a.population).slice(0, 10))

    }, [countries])

    return (
        <div className='overflow-x-hidden'>
            <Hero />
            <h1 className='text-4xl font-semibold text-center my-9'>Top 10 Most Popular Countries</h1>
            <div className='flex p-4 gap-10 flex-wrap items-center justify-center'>
                {top10Countries.length ? top10Countries.map((country) => (
                    <Card key={country.cca3} flag={country.flags.png} name={country.name.common} id={country.cca3}/>
                )) : null}
            </div>
        </div>
    )
}

export default Home