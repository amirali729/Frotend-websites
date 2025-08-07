import React from 'react'

import logo from '../../assets/logo.png'  
import { BiPhoneCall } from 'react-icons/bi'
import DarkMode from './DarkMode'



function Navbar() {
   const theme = localStorage.getItem("theme") || "light";
  return (
    <>
      <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
        <div className='container mx-auto'>
          <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2 dark:text-gray-400 group group '>
              <BiPhoneCall className=' text-2xl text-[#fe9808] animate-pulse group-hover:scale-105' />
            <span>+92 3052605915</span></div>
            {/* <div>+923052605915</div> */}
            <div><img src={logo} alt="" 
            className='w-16'/></div>
            <div>
              <ul className='flex items-center space-around gap-8'>
                <li className=' text-lg hover:text-[#fe9808] cursor-pointer font-semibold'>Home </li>
                <li className=' text-lg hover:text-[#fe9808] cursor-pointer font-semibold'>contact us</li>
                <li className=' text-lg hover:text-[#fe9808] cursor-pointer font-semibold'>Join</li>
              <DarkMode />
              </ul>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar