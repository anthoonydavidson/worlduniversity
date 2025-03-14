import React from 'react'
import vision from '../assets/vision.jpg'
import mission from '../assets/mission.png'

const About = () => {
    return (
        <div className='px-[7%]'>
            <div className='flex flex-col justify-center items-center text-center h-auto md:h-80 px-[7%] [@media(max-width:770px)]:my-16'>
                <h1 className='text-5xl font-semibold my-10'>About Us</h1>
                <p className='text-lg font-light text-slate-600 max-w-2xl'>
                    At WorldUniversity, we empower students with global knowledge, bridging borders through education, exploration, and connection.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center px-[7%] w-full mb-36 gap-8'>
                <div className='w-full md:w-1/2 bg-white p-8 shadow-lg relative z-10'>
                    <h2 className='text-3xl font-semibold text-green-600 text-center'>Our Vision</h2>
                    <p className='text-lg mt-2 leading-relaxed text-gray-700'>
                        To be the leading platform that empowers students with global knowledge, fostering cultural understanding, academic growth, and seamless exploration of countries worldwide.
                    </p>
                </div>

                <div className='w-full md:w-3/4 flex relative md:-ml-40'>
                    <img src={vision} alt="vision" className='w-full h-[250px] md:h-[300px] shadow-lg object-cover' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center px-[7%] gap-10 mt-7 w-full'>
                <div className='w-full md:w-3/4 flex relative'>
                    <img src={mission} alt="mission" className='w-full h-[250px] md:h-[400px] shadow-lg object-cover' />
                </div>

                <div className='w-full md:w-2/3 bg-white p-8 shadow-lg relative z-10 md:-ml-40'>
                    <h2 className='text-3xl font-semibold text-red-600 text-center mb-3'>Our Mission</h2>
                    <ul className='list-disc text-lg mt-2 leading-relaxed text-gray-700 space-y-2 pl-6'>
                        <li>Deliver comprehensive and up-to-date insights about countries around the world</li>
                        <li>Inspire curiosity and discovery through detailed country data, maps, and interactive features.</li>
                        <li>Make global knowledge easily accessible to students worldwide through a seamless and user-friendly experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
