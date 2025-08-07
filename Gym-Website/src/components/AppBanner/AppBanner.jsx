import React from 'react'
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/dumbell.jpg";


function AppBanner() {
    const bgStyle = {
            backgroundImage: `url(${pattern})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%', // Set a fixed height
        }
  return (
    <div>
        <div className='container justify-center items-center mx-auto'>
            <div className=" text-white py-10 sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl" style={bgStyle}>
                <div>
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 className="text-2xl text-center sm:text-4xl font-semibold font-serif" >
                            Get Started with our app
                        </h1>
                        <p className="text-center sm:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est dolore earum officia ratione ut sint quasi et cupiditate fuga?</p>
                        <div>
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <img src={AppStoreImg} alt="App Store" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                                <img src={PlayStoreImg} alt="Play Store" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner