"use client";

import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { LucideSquareGanttChart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-red-500">Sameer-Portfolio</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-red-500 transition duration-300">Home</Link>
          <Link href="/Components/About" className="hover:text-red-500 transition duration-300">About</Link>
          <Link href="/Components/Projects" className="hover:text-red-500 transition duration-300">Projects</Link>
          <Link href="/Components/Contact" className="hover:text-red-500 transition duration-300">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/Sameer1311" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-red-500 transition duration-300" />
          </a>
          <a href="https://leetcode.com/u/Codesameer/" target="_blank" rel="noopener noreferrer">
            <LucideSquareGanttChart className="text-xl hover:text-red-500 transition duration-300" />
          </a>

          <a href="https://www.linkedin.com/in/sameer-negi-52a85b336/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-red-500 transition duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-red-500 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Sameer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
