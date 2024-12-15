'use client'; // Ensure this is a client-side component

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { useInView } from 'react-intersection-observer'; // Import the hook for scroll visibility

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Intersection observer for the Contacts section
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when the element is in view
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus('Please fill out all fields');
      return;
    }
    setFormStatus('Your message has been sent successfully!');
  };

  return (
    <div
      id="Contacts"
      className="pt-32 container mx-auto px-4 pb-16"
      ref={ref} // Add ref to track visibility
    >
      <div
        className={`grid md:grid-cols-2 gap-10 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}
      >
        {/* Left side: Contact info */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Get in touch</h2>
          <p className="text--[#edcc56] text-sm sm:text-base md:text-lg pt-2">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex gap-3 items-center">
            <AiTwotoneMail size={30} className="text-red-500" /> xyz@Gmail.com
          </div>
          <div className="flex gap-3 items-center">
            <LiaPhoneVolumeSolid size={30} className="text-red-500" /> (+92) 000-000-0000
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-[40px] bg-red-700 border-gray-300 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-[40px] bg-red-700 border-gray-300 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-lg font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-[40px] bg-red-700 border-gray-300 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  pattern="[+]?[0-9]{1,4}?[0-9]{3,14}"
                  placeholder="+92 000-000-0000"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-red-700 border-gray-300 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none leading-6"
                  required
                  placeholder="Enter your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black border-gray-300 p-3 rounded text-white mt-4 hover:bg-red-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Form Status */}
          {formStatus && (
            <p
              className={`mt-4 p-2 text-center rounded ${formStatus.includes('success') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
            >
              {formStatus}
            </p>
          )}
        </div>
      </div>

      {/* CSS Keyframes Animation */}
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

export default Contacts;
