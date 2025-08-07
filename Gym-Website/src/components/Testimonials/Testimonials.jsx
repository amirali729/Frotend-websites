import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Prabhakar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
   {
    id: 3,
    name: "sakshi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 5,
    name: "Ana da armas",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    
  return (
    <div className='my-10 py-10'>
        <div className="container dark:bg-[#111111]  mx-4">
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold pt-5 text-[#fe9808]'>Testimonials</h1>
            </div>
            <div>
                <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-40 h-40 "
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className=" text-3xl text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold dark:text-white text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials