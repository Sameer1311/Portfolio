"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaPalette, FaMobileAlt, FaServer } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-blue-500 text-5xl" />,
    description: "Building modern, scalable, and high-performance web applications.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette className="text-purple-500 text-5xl" />,
    description: "Creating beautiful and user-friendly interfaces with a seamless experience.",
  },
  {
    title: "Front_end Development",
    icon: <FaMobileAlt className="text-green-500 text-5xl" />,
    description: "Developing responsive and high-performing web applications.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-yellow-500 text-5xl" />,
    description: "Building robust and secure backend architectures for scalable applications.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={servicesRef}
      className="w-full my-10 flex flex-col items-center justify-center px-5"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6">Services</h1>
      <p className="text-lg md:text-xl dark:text-gray-300 text-center mb-10">
        I offer a wide range of digital services to bring your ideas to life.
      </p>

      {/* ✅ Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl text-center transition-all 
                       backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
