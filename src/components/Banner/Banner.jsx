import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPlay } from 'react-icons/fa';

const Banner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  const bannerImages = [
    'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742992985/Sports%20Store/Banner%20Image/sports-equipment-buying-guide-what-to-consider-when-making-purchases_qj0kuy.jpg',
    'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742993665/Sports%20Store/Banner%20Image/images_vdlmxl.jpg',
    'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742993733/Sports%20Store/Banner%20Image/Tennis-Racquet-Picturejpg_aveswc.jpg',
    'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742926847/Sports%20Store/Banner%20Image/largest-sports-equipment-companies.jpg_jdy1du.webp',
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 py-10 lg:py-20 min-h-[80vh] bg-gray-400 dark:bg-gray-800">
      {/* Left Section: Text and Button */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-8 lg:mb-0">
        <Fade direction="left" triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Elevate Your Game with SportsGear
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400">
            Premium Sports Equipment Store
          </p>
          <button className="mt-4 px-6 py-3 bg-transparent border-2 border-yellow-400 text-gray-900 dark:text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 rounded-lg">
            Shop Now
          </button>
        </Fade>
      </div>

      {/* Right Section: Banner Slider */}
      <div className="w-full lg:w-1/2">
        <Fade direction="right" triggerOnce>
          <Slider {...sliderSettings}>
            {bannerImages.map((image, index) => (
              <div key={index} className="relative px-2">
                <img
                  src={image}
                  alt={`Sports Equipment ${index + 1}`}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-3 sm:p-4 bg-yellow-400 rounded-full text-gray-900 hover:bg-yellow-500 transition-colors duration-300">
                    <FaPlay size={20} />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;