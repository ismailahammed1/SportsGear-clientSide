import React from 'react';
import { Fade, Slide, Zoom, Bounce } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Zoom triggerOnce>
          <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b-4 border-red-600 pb-2 text-center">
            About Our Store
          </h1>
        </Zoom>

        {/* Intro Paragraph with Slide Animation */}
        <Slide direction="left" triggerOnce>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Welcome to{' '}
            <span className="font-semibold text-red-600 dark:text-red-400">
              Elite Sports Gear
            </span>{' '}
            – your trusted destination for high-quality sports equipment. Whether you’re a seasoned athlete, a coach, or just getting started, we provide a wide range of gear to support your performance and passion.
          </p>
        </Slide>

        {/* What We Offer Section */}
        <Fade delay={200} triggerOnce>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-center">
            What We Offer
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Bounce delay={300} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              🏀 Basketballs, nets, and accessories
            </div>
          </Bounce>
          <Bounce delay={400} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              ⚽ Footballs, cleats, and kits
            </div>
          </Bounce>
          <Bounce delay={500} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              🏏 Cricket bats, pads, and gear
            </div>
          </Bounce>
          <Bounce delay={600} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              🏋️‍♂️ Gym and fitness equipment
            </div>
          </Bounce>
          <Bounce delay={700} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow col-span-full md:col-span-1 md:mx-auto">
              🎾 Tennis racquets and more
            </div>
          </Bounce>
        </div>

        {/* Why Choose Us Section */}
        <Fade delay={400} triggerOnce>
          <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-3 text-center">
            Why Choose Us?
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Slide direction="right" delay={500} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              ✅ 100% genuine products
            </div>
          </Slide>
          <Slide direction="right" delay={600} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              ✅ Affordable pricing
            </div>
          </Slide>
          <Slide direction="right" delay={700} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              ✅ Fast shipping
            </div>
          </Slide>
          <Slide direction="right" delay={800} triggerOnce>
            <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              ✅ For all skill levels
            </div>
          </Slide>
        </div>

        {/* Closing Paragraph */}
        <Zoom delay={600} triggerOnce>
          <p className="mt-12 text-lg text-center max-w-3xl mx-auto">
            Join thousands of happy customers who trust us for their sports needs. Let’s help you play better, stronger, and safer!
          </p>
        </Zoom>

        {/* Footer */}
        <Fade delay={800} triggerOnce>
          <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Elite Sports Gear. All rights reserved.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;