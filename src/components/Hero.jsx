import React from 'react';
import heroImage from '../assets/hero.png';
import darkArrow from '../assets/dark-arrow.png';
import {Link} from 'react-router-dom';

const Hero = () => {
    
    return (
        <div className="relative flex items-center justify-center px-[7%] w-full min-h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${heroImage})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,0,58,0.7)] to-[rgba(8,0,58,0.7)]"></div>

            <div className='relative flex flex-col min-h-screen z-[1] text-center pt-10 justify-center items-center max-w-[800px]'>
                <h1 className='text-[60px] font-semibold leading-tight mb-6'>Explore, Learn, and Connect with the World.</h1>
                <p className='max-w-[700px] mx-auto mb-8 leading-normal text-[18px]'>WorldUniversity is a platform that helps students to explore, learn, and connect with countries around the world, providing detailed insights, and a seamless user experience.</p>
                <Link to='/search' className='inline-block my-1 mx-5'><button className='bg-white text-[#212121] py-3 px-6 text-[16px] rounded-[30px] cursor-pointer inline-flex justify-center items-center hover:bg-orange-300 hover:scale-105 transition-all duration-500'>Explore more<img src={darkArrow} alt="arrow" className='w-5 ml-2.5' /></button></Link>
            </div>
        </div>
    )
}

export default Hero;