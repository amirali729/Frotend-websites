import React from 'react'
import logo from '../assets/logo.svg'
import { navLinks } from '../constants'
import { useState } from 'react'
import { menu, close} from '../assets'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='flex justify-between w-full items-center py-2 navbar'>
            <img src={logo} alt="bank-logo"
                className='w-[124px] h-[32px]' />

            <ul className='list-none sm:flex hidden  items-center  ml-auto gap-6'>
                {navLinks.map((nav, index) => (
                    <li 
                    key={nav.id}
                    className={`font-popins hover:text-secondary font-normal cursor-pointer text-[16px]  text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu}
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle((prev) => !prev)}
              alt="" />
              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-30 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col  items-center  ml-2 gap-6'>
                {navLinks.map((nav, index) => (
                    <li 
                    key={nav.id}
                    className={`font-popins mb-10 font-normal cursor-pointer text-[16px]  text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
                </div>  
            </div>
        </nav>

    )
}

export default Navbar
