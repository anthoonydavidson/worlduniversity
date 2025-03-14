import React, { useContext, useState } from 'react'
import { DataContext } from '../contexts/DataContext'
import Card from '../components/Card.jsx'
import SearchBar from '../components/SearchBar.jsx'
import DropDown from '../components/DropDown.jsx'

const Search = () => {
    const { countries } = useContext(DataContext)
    const [inputs, setInputs] = useState('')
    const uniqueRegions = [...new Set(countries.map((country) => country.region))]
    const uniqueIndependent = [...new Set(countries.map((country) => String(country.independent)))]

    const [selectedRegion, setSelectedRegion] = useState('')
    const [selectedIndependent, setSelectedIndependent] = useState('')

    return (
        <>
            <SearchBar setInputs={setInputs} />
            <div className='flex justify-between px-[7%] flex-wrap gap-5'>
                <DropDown parameter="Filter Continent / Region" datas={uniqueRegions} onSelect={setSelectedRegion} />
                <DropDown parameter="Filter Independence Status" datas={uniqueIndependent} onSelect={setSelectedIndependent} />
            </div>

            <div className='flex p-4 gap-10 flex-wrap items-center justify-center'>
                {countries.length ? countries.filter((country) => {
                    const matchesSearch = inputs.toLowerCase() === '' || country.name.common.toLowerCase().includes(inputs)
                    const matchesRegion = selectedRegion === '' || country.region === selectedRegion
                    const matchesIndependence = selectedIndependent === '' || String(country.independent) === selectedIndependent
                    return matchesSearch && matchesRegion && matchesIndependence
                }).map((country) => (
                    <Card key={country.cca3} flag={country.flags.png} name={country.name.common} id={country.cca3} />
                )) : null}
            </div>
        </>
    )
}

export default Search