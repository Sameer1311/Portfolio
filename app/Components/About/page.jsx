"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const technologies = [
  { name: "Next.js", src: "/Next js.svg" },
  { name: "React", src: "/React.svg" },
  { name: "Tailwind CSS", src: "/Tailwind.svg" },
  { name: "Javascript", src: "/Javascript.svg" },
  { name: "Node.js", src: "/Node.svg" },
  { name: "Express", src: "/express.svg" },
  { name: "MongoDB", src: "/MongoDB.svg" },
  { name: "GSAP", src: "/gsap.jpeg" },
  { name: "React Three Fiber", src: "/R3f.jpeg" },
  { name: "Three.js", src: "/three js.jpeg" },
  { name: "HTML", src: "/HTML.svg" },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { x: "-100vw", opacity: 0 }, // Start off-screen to the left
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts when the section is in view
          end: "top 10%", // Ends when the section reaches top 10%
          scrub: true, // Smooth animation effect
          toggleActions: "play none reverse none",
        },
      }
    );

    // gsap.to(sectionRef.current, {
    //   x: "-100vw",
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "bottom 80%",
    //     end: "bottom 20%",
    //     scrub: true,
    //     toggleActions: "play none reverse none",
    //   },
    // });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-white px-5 py-10">
      {/* Section Header */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-red-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      {/* Description */}
      <motion.p
        className="dark:text-white text-lg md:text-xl max-w-3xl text-center text-gray-800 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm a passionate <b className="text-red-500">Full-Stack Developer</b> skilled in modern web
        technologies. I build <b className="text-red-500">high-performance</b> and <b className="text-red-500">scalable</b> web
        applications with a focus on <b className="text-red-500">Next.js</b>, <b className="text-red-500">React</b>, and
        <b className="text-red-500">Node.js</b>. My expertise also includes{" "}
        <b className="text-red-500">3D Web Development with React Three Fiber</b>.
      </motion.p>

      {/* Technologies Section */}
      <motion.div
        ref={sectionRef}
        className="border-2 border-black about-sec grid grid-cols-3 md:grid-cols-5 gap-6 dark:border-2  rounded-md p-2 shadow-lg"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center font-bold"
            whileHover={{ scale: 1.2 }}
          >
            <Image src={tech.src} alt={tech.name} width={50} height={50} className="dark:invert" />
            <span className="text-sm mt-2 text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
