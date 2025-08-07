import React from 'react'
import Banner from '../../assets/banner.png'

function About() {
    return (
        <div className='bg-slate-100 dark:bg-black duration-200 dark:text-white py-14'>
            <div className="container">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
                    <div>
                        <img src={Banner}
                         alt=""
                         className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
                          />
                    </div>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-4'>
                            <div className='text-7xl text-[#fe9808]'>
                                <h1 className='font-bold'>01</h1>
                            </div>
                                <div>
                                    <p className='text-[#fe9808]'>Global Fitness</p>
                                    <h1 className='text-2xl font-bold sm:text-4xl'>About Us</h1>
                                </div>
                        </div>
                                <div>
                                    <p>At Global Fitness, we’re committed to building a healthier, stronger you.Our gym offers top-tier equipment, expert personal trainers
                                     <br />  
                                     <br />  
                                    a supportive environment for all fitness levels. 
                                    </p>
                                </div>
                                <div>
                                    <button className='rounded-md border-2 border-[#fe9808] hover:bg-[#fe9808]/80 hover:text-black duration-500 py-2 px-6 text-[#fe9808] tracking-wider' >Get started</button>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About