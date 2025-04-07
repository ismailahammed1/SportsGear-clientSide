import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";


const LatestNews = () => {
    const news = [
      { title: "New Arrivals", description: "Check out the latest sports gear in our store!", date: "April 2025" },
      { title: "Exclusive Discounts", description: "Get up to 50% off on selected items.", date: "March 2025" },
    ];
  
    return (
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Latest News</h2>
          <Fade cascade damping={0.3} triggerOnce>
            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item, index) => (
                <Zoom key={index}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <h3 className="text-xl text-yellow-400">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>
                    <p className="mt-1 text-gray-400">{item.date}</p>
                  </div>
                </Zoom>
              ))}
            </div>
          </Fade>
        </div>
      </section>
    );
  };
export default LatestNews ;
