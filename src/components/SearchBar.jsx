import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({setInputs}) => {

  return (
    <form className='w-full relative mt-36 px-[7%] mb-10'>
        <div className="relative">
            <input onChange={(e) => setInputs(e.target.value)} type="search" placeholder='Search Countries' className='w-full p-4 rounded-full border-2'/>
            <div className='absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white cursor-pointer'>
                <FaSearch/>
            </div>
        </div>
    </form>
  )
}

export default SearchBar