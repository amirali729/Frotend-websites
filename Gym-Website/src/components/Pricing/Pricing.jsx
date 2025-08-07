import React from 'react'

function Pricing() {
    const dataSkill = [
        {
            name: "Gold Card",
            price: 999,
            // icon: (
            //   <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
            // ),

            description: [
                "Monthly access to fitness area.",
                "Training sessions on demand.",
                "Personal trainer on demand.",
                "Live classes on demand.",
            ],
            duration: "12 month",

        },
        {
            name: "Silver Card",
            price: 1499,
            // icon: (
            //   <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
            // ),

            description: [
                "Monthly access to fitness area.",
                "Training sessions on demand.",
                "Personal trainer on demand.",
                "Live classes on demand.",
            ],
            duration: "12 month",

        },
        {
            name: "Platinum Card",
            price: 2000,
            // icon: (
            //   <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
            // ),

            description: [
                "Monthly access to fitness area.",
                "Training sessions on demand.",
                "Personal trainer on demand.",
                "Live classes on demand.",
            ],
            duration: "12 month",

        },
    ]
    return (
        <div className='my-14 py-16'>
            <div className="container">
                <h1 className='text-3xl sm:text-5xl text-[#fe9808] text-center font-black'>Pricing</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-10 gap-6 ">
                    {dataSkill.map((items, index) => (
                        <div key={index} className='space-y-3 text-center dark:bg-[#111111] bg-gray-200 text-black dark:text-white p-4 rounded-lg sm:py-16 group shadow-xl dark:hover:bg-[#fe9808]/40 hover:bg-[#fe9808]/20 duration-200'>
                            <h1 className='font-bold text-4xl'>{items.name}</h1>
                            <h1 className='font-semibold text-3xl text-[#fe9808] '>Rs {items.price}</h1>
                            {items.description.map((description) => (
                                <p key={description}>{description}</p>
                            ))}
                            <p className='text-3xl font-semibold py-3'>{items.duration}</p>
                            <button className='inline-block rounded-md bg-[#fe9808] hover:bg-[#fe9808]/80 transition duration-500 py-2 px-6 text-white'>Learn more</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
}

            export default Pricing