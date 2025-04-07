
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const SportsEquipnetNav = () => {
  const sportsCategories = [
    { name: 'Football', image: 'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1743180685/Sports%20Store/navitem/images_jfnyeq.jpg' },
    { name: 'Basketball', image: 'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1743180732/Sports%20Store/navitem/photo_mosr04.webp' },
    { name: 'Tennis', image: 'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742993733/Sports%20Store/Banner%20Image/Tennis-Racquet-Picturejpg_aveswc.jpg' },
    { name: 'Cricket', image: 'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742993812/Sports%20Store/navitem/abca0ab7c92023e9e41dd9255b31e6ad_jstvzh.jpg' },
    { name: 'Swimming', image: 'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742993864/Sports%20Store/navitem/Freestyle_Stroke_jjdhwb.webp' },
    { name: 'Volleyball', image: 'https://res.cloudinary.com/dfn1s2ysa/image/upload/v1742993911/Sports%20Store/navitem/671be52035eec99849db3843_64f0ca6ca87a770971ef8235_ball-1930191_1280_vmaliu.jpg' },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <Slide direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Sports Categories
          </h2>
        </Slide>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsCategories.map((sport, index) => (
            <Fade
              key={sport.name}
              direction="up"
              delay={index * 100}
              triggerOnce
            >
             <Link to={`/${sport.name.toLowerCase()}`} aria-label={`View ${sport.name} equipment`}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-yellow-400">{sport.name}</h3>
                  </div>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};



export default SportsEquipnetNav