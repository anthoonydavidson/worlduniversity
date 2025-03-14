import React, { useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu-icon.png'
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <nav className='w-full text-[#FFF] py-1 px-[7%] fixed top-0 left-0 flex items-center justify-between z-20 bg-gray-900'>
            <img src={logo} alt="Logo" className='w-80'/>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li className='inline-block my-1 mx-5 text-[20px] hover:underline hover:text-orange-300 transition-all duration-500'><Link to='/'>Home</Link></li>
                <li className='inline-block my-1 mx-5 text-[20px] hover:underline hover:text-orange-300 transition-all duration-500'><Link to='/about'>About</Link></li>
                <li className='inline-block my-1 mx-5'><Link to='/search'><button className='bg-white text-[#212121] py-1.5 px-6 text-[18px] rounded-[30px] cursor-pointer hover:bg-orange-300 hover:scale-105 transition-all duration-500'>Search</button></Link></li>
            </ul>

            <img src={menu} alt="menu icon" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar;