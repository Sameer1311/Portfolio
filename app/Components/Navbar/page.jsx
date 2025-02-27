"use client";

import { useState } from "react";
import { MenuIcon, X, MoreVertical,MoreHorizontalIcon, HomeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <Button
        className="fixed top-4 left-4 z-20 text-white bg-red-700 rounded-md shadow-md p-4"
        onClick={handleMenu}
      >
        {menu ? <X size={24} /> : <MenuIcon size={24} />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 bg-gray-900 text-white shadow-lg border-r border-gray-700 transition-transform duration-500 ease-in-out ${
          menu ? "translate-x-0 w-[60vw] md:w-[40vw]" : "-translate-x-full w-[60vw] md:w-[40vw]"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Navigation</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="cursor-pointer flex items-center space-x-3 hover:text-gray-400 transition">
                <HomeIcon size={24} /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/Components/About" className="flex items-center space-x-3 hover:text-gray-400 transition">
                <PersonStandingIcon size={24} /> <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="/Components/Services_page" className="flex items-center space-x-3 hover:text-gray-400 transition">
                <MoreHorizontalIcon size={24} /> <span>Services</span>
              </Link>
            </li>
            <li>
              <Link href="/Components/Contact" className="flex items-center space-x-3 hover:text-gray-400 transition">
                <MailIcon size={24} /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {menu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={handleMenu} />
      )}
    </>
  );
};

export default Navbar;
