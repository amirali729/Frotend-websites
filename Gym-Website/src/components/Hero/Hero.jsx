import React from 'react'
import BannerImg from '../../assets/hero.jpg'

function Hero() {

    const bgStyle = {
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '400px', // Set a fixed height
    }
    return (
        <div style={bgStyle} className=' bg-white dark:text-white dark:bg-black duartion-200'>
            <div className='bg-white/70 dark:bg-black/70 duration-200'>
                <div className='flex items-center container min-h-[400px]'>
                <div className='w-full mx-auto text-center md:w-[550px] space-y-5'>
                <p className='text-[#fe9808] text-2xl'>Start Your Fitness Journey</p>
                <h1 className='font-bold text-5xl md:text-7xl'>Your Fitness Journey Begins!</h1>
                <p>“The body achieves what the mind believes.”{" "}</p>
                <button className='inline-block rounded-md bg-[#fe9808] hover:bg-[#fe9808]/80 transition duration-500 py-2 px-6 text-white'> Get Started</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero