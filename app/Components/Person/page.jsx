"use client";

import { React, useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Load and Animate the 3D Model
function Model() {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "/Person.glb");
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth > 1024 ? 4 : 3);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        y: "+=6.28319", // 360 degrees in radians
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return <primitive ref={ref} object={gltf.scene} scale={scale} position={[0, 0, 0]} />;
}

// Skills Data
const skills = [
  { name: "Front-end", level: 90 },
  { name: "Back-end", level: 75 },
  { name: "DSA", level: 75 },
];

// Skill Status Bar (Memoized)
const SkillStatusBar = memo(() => {
  const { viewport } = useThree();
  const positionX = viewport.width > 5 ? 2 : 1.5;

  return (
    <Html position={[positionX, -0.2, 0]} center>
      <div className="p-2 md:p-4 rounded-lg shadow-lg w-32 md:w-48 text-white bg-black border-2 border-red-600 dark:bg-gray-900 md:block hidden">
        <h3 className="text-center font-bold mb-2 text-sm md:text-base text-red-500">Skills</h3>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-2 font-bold">
            <span className="text-xs md:text-sm">{skill.name}</span>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
        <div className="mt-2">
          <Link href="/Components/About">
            <Button className="border-2 border-red-600 w-full text-xs md:text-sm text-white">Explore</Button>
          </Link>
        </div>
      </div>
    </Html>
  );
});

// Main Component
const Person = () => {
  const containerRef = useRef(null);
  const person_sideRef = useRef(null);
  const person_RightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      person_sideRef.current,
      { x: "-100vw", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      person_RightRef.current,
      { x: "100vw", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="border-2 border-red-600 h-screen flex items-center justify-center w-full p-5">
      <div className="flex w-full max-w-5xl h-[500px]">
        {/* Left Text Section */}
        <div ref={person_sideRef} className="flex flex-col justify-center w-1/2  dark:text-white ">
          <h1 className="text-center text-2xl md:text-4xl font-bold mb-4 text-red-500">
            Hi, I'm a passionate Full-Stack Developer!
          </h1>
          <p className="text-sm md:text-base text-gray-800 text-center dark:text-white">
            I specialize in building high-performance web applications using <b className="text-red-500">Next.js</b>, 
            <b className="text-red-500"> React.js</b>, <b className="text-red-500">Tailwind CSS</b>, and <b className="text-red-500">Javascript</b>. 
            On the backend, I work with <b className="text-red-500">Node.js</b>, <b className="text-red-500">Express</b>, and <b className="text-red-500">MongoDB</b>. 
            I also have experience in <b className="text-red-500">Data Structures & Algorithms (DSA)</b> and problem-solving.
          </p>
          <p className="mt-3 text-sm md:text-base text-gray-800 text-center dark:text-white">
            Currently, I'm diving deep into <b className="text-red-500">React Three Fiber</b> and<b className="text-red-500 font-bold"> 3D Web Development.</b>
          </p>
        </div>

        {/* Right 3D Section */}
        <div ref={person_RightRef} className="w-1/2">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[2, 3, 4]} />
            <OrbitControls enableZoom={false} />
            <Model />
            <SkillStatusBar />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Person;
