import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const FeaturedReviews = () => {
  const reviews = [
    { name: "John Doe", comment: "Amazing quality!", rating: 5 },
    { name: "Jane Smith", comment: "Fast delivery & great service.", rating: 4 },
    { name: "Mike Johnson", comment: "Highly recommend this store.", rating: 5 },
  ];

  return (
    <section className="py-12 bg-gray-700 text-white">
      <div className="container mx-auto px-6">
        
        {/* Title with animation */}
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
            Customer Reviews
          </h2>
        </Fade>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {reviews.map((review, index) => (
            <Zoom key={index} triggerOnce>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                
                {/* Review Text */}
                <p className="text-lg italic text-gray-300">"{review.comment}"</p>
                
                {/* Reviewer Name */}
                <p className="mt-3 text-yellow-400 font-semibold">- {review.name}</p>

                {/* Star Rating */}
                <p className="mt-2 text-yellow-500 text-lg font-bold">
                  {"⭐".repeat(review.rating)}
                </p>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
