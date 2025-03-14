import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ flag, name, id }) => {
    return (
        <div className='p-4 flex flex-col bg-slate-50 w-fit shadow-md justify-center text-left rounded-xl'>
            <div className='h-32 w-48 flex mb-2'>
                <img src={flag} alt="flag" className="w-full h-full object-fill"/>
            </div>

            <h1 className='text-2xl font-bold w-48 mb-1 overflow-hidden whitespace-nowrap truncate' title={name}>
                {name}
            </h1>
            <Link to={`/country/${id}`} className='hover:underline hover:text-orange-500'>See Detail</Link>
        </div>
    )
}

export default Card
