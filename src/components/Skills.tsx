'use client'; // Ensure this is a client-side component

import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import hook to detect scroll visibility

const Skills = () => {
  // Intersection observer for the Skills section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when the element is in view
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  return (
    <div className="container pt-32">
      {/* Skills Section */}
      <div
        id="Skills"
        ref={ref} // Set ref to track the visibility of the section
        className={`grid md:grid-cols-2 gap-20 items-center ${inView ? 'animate-fadeInUp' : 'opacity-0'}`} 
      >
        {/* Left side - Description */}
        <div>
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-red-100">
            As a front-end developer, I specialize in creating modern, responsive web applications using the latest technologies. I have a strong foundation in HTML and CSS, ensuring clean and user-friendly designs. With TypeScript, I write type-safe and maintainable code, reducing errors and improving the development process. I am highly proficient in React, leveraging its component-based architecture to build dynamic, efficient user interfaces. Additionally, I work with Next.js to develop fast, SEO-friendly applications, and I use Tailwind CSS for streamlined, responsive design. My experience also includes working with Version Control (Git) and continuously learning new tools and frameworks to stay ahead in the ever-evolving front-end development landscape.
          </p>
        </div>

        {/* Right side - Skills List */}
        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2>Typescript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>
            </div>
            <div className="space-y-2">
              <h2>Tailwind</h2>
              <h2>CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px); /* Start from below */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* End at normal position */
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.5s ease-out; /* Fade and slide up animation */
        }
      `}</style>
    </div>
  );
};

export default Skills;
