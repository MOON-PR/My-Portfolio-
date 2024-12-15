'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import hook from react-intersection-observer
import Navbar from './Navbar';
import Image from 'next/image';

const Hero = () => {
  // Intersection observer hooks for each section to track when they come into view
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div>
      {/* Hero Section */}
      <div
        id="hero"
        ref={heroRef} // Set ref for intersection observer
        className={` bg-no-repeat bg-[url(/)] top-96 lg:bg-[15%] bg-cover transition-all duration-700 ${
          heroInView ? 'animate-fadeInUp opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundSize: '25%' }}
      >
        <Navbar />

        <div className="container flex lg:flex-row flex-col items-center justify-center gap-8 px-4 lg:px-0 h-[calc(100vh-60px)]">
          {/* Left side - Profile Image */}
          <div className="lg:flex hidden justify-center items-center">
            <Image
              src="/banner_bg.jpg" // Ensure the profile image path is correct
              alt="Profile"
              width={256}
              height={256}
              className="rounded-full object-cover"
            />
          </div>

          {/* Right side - Hero Text */}
          <div
            className={`text-center lg:text-left flex flex-col justify-center items-center space-y-4 transition-all duration-700 ${
              heroInView ? 'animate-fadeInUp opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-[40px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
              <p>I'm</p>
              <p>Muhammad</p>
              <p>Ibrahim</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add the keyframes for the animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px); /* Start from below */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* End at normal position */
          }
        }

        /* Apply the fadeInUp animation */
        .animate-fadeInUp {
          animation: fadeInUp 1.5s ease-out; /* Fade and slide up with smooth animation */
        }
      `}</style>
    </div>
  );
};

export default Hero;
