"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import waitingAnimation from "@/public/animation/Wating.json"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={projectsRef} className="w-full min-h-screen flex flex-col items-center justify-center px-5">
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6">Projects</h1>
      <p className="text-lg md:text-xl dark:text-gray-300 text-center">
        {"I'm currently working on exciting projects. Stay tuned!"}
      </p>

      {/* ✅ Lottie Animation (Properly Loaded) */}
      <div className="w-64 h-64 mt-10">
        <Lottie animationData={waitingAnimation} loop autoplay />
      </div>
    </div>
  );
};

export default Projects;

