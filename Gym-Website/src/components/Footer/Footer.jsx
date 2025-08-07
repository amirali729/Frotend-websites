import React from 'react'

import logo from '../../assets/logo.png'  
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';




function Footer() {
   const theme = localStorage.getItem("theme") || "light";
  return (
    <>
      <nav className="relative z-10 shadow-md w-full dark:bg-[#24242411] bg-gray-200 py-2 dark:text-white duration-300">
        <div className='container mx-auto'>
          <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="" 
            className='w-16'/>
            <div className='flex items-center  gap-4'>
                <a href="https://www.instagram.com/urs_truly._.amir/">
                    <FaInstagram 
                    className='text-3xl hover:text-[#fe9808] duration-300 cursor-pointer'
                    />
                </a>
                <a href="#">
                    <FaFacebook 
                    className='text-3xl hover:text-[#fe9808] duration-300 cursor-pointer'
                    />
                </a>
                <a href="#">
                    <FaLinkedin 
                    className='text-3xl hover:text-[#fe9808] duration-300 cursor-pointer'
                    />
                </a>
            </div>
            </div>
            <div className='flex items-center gap-2 dark:text-gray-400 group group '>
              <BiPhoneCall className=' text-2xl text-[#fe9808] animate-pulse group-hover:scale-105' />
            <span>+92 3052605915</span>
            <div>
            </div>
            {/* <div>+923052605915</div> */}
            
              <ul className='flex items-center space-around gap-8'>
                <li className=' text-lg hover:text-[#fe9808] cursor-pointer font-semibold'>Home </li>
                <li className=' text-lg hover:text-[#fe9808] cursor-pointer font-semibold'>contact us</li>
                <li className=' text-lg hover:text-[#fe9808] cursor-pointer font-semibold'>Join</li>
              
              </ul>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  )
}

export default Footer