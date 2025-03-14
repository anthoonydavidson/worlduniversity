import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const DropDown = ({ parameter, datas = [], onSelect }) => {

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')

    return (
        <div className='flex-1 font-normal mb-3'>
            <div onClick={() => setOpen(!open)} className={`bg-white w-full p-2 flex items-center justify-between rounded ${selected ? 'text-black' : 'text-gray-400'}`}>
                <p>{selected ? selected : parameter}</p>
                <FaChevronDown size={13} className={open ? 'rotate-180' : ''} />
            </div>

            {open ?
                <div className='w-full font-medium'>
                    <ul className='bg-white overflow-y-auto max-h-28'>
                        <li
                            onClick={() => {
                                setOpen(false)
                                setSelected('')
                                onSelect('')
                            }} className='p-2 text-sm text-red-600 hover:bg-gray-900 hover:text-white'>Clear Filter</li>

                        {datas.length ? datas.map((data) => (
                            <li onClick={() => {
                                setOpen(false)
                                setSelected(data)
                                onSelect(data)
                            }} className='p-2 text-sm hover:bg-gray-900 hover:text-white'>{data}</li>
                        )) : null}
                    </ul>
                </div>
                : null}
        </div>
    )
}

export default DropDown