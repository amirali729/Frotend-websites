import React from 'react'

function Contact() {
    return (
        <div className='my-14 '>
            <div className='container mx-auto dark:bg-[#111111] bg-gray-100  py-14 '>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='col-span-2'>
                        <h1 className='text-3xl  pl-4 dark:text-white sm:text-4xl '><span className='text-[#fe9808] font-bold'> Sweat now, shine later.</span>{" "}
                        Your body is a reflection of your lifestyle choices.</h1>
                        </div>
                        <div className='text-center grid place-items-center '>
                        <button className='inline-block rounded-md bg-[#fe9808] hover:bg-[#fe9808]/80 transition duration-500 py-2 px-6 text-white'>Contact</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Contact