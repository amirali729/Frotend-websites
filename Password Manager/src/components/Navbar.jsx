import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-red-400  '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-15">
                <div className='logo '> <span className='text-green-500'> &lt;</span>

                    <span>Pass</span><span className='text-green-500'>Owner/&gt;</span>
                </div>
                {/* <ul >
        <li className=' text-2xl flex items-center   '>
            <a className='hover:font-bold hover:bg-neutral-950 hover:text-orange-400 hover:rounded-3xl px-4 py-2' href="/">home</a>
            <a className='hover:font-bold hover:bg-gray-600 hover:text-orange-400 hover:rounded-3xl px-4 py-2' href="/">contact</a>
            <a className='hover:font-bold hover:bg-gray-600 hover:text-orange-400 hover:rounded-3xl px-4 py-2' href="/">about us</a>
            <a className='hover:font-bold hover:bg-gray-600 hover:text-orange-400 hover:rounded-3xl px-4 py-2' href="/">links</a>
        </li>
        
      </ul> */}
                <button className='text-white bg-green-700 my-5 py-2 px-2 mx-4 rounded-full flex  justify-between items-center ring-white ring-1'>
                    <img className='invert  w-10 p-1' src="/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>

                </button>
            </div>
        </nav>
    )
}

export default Navbar
