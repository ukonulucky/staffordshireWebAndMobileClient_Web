"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-2 z-50">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col items-center justify-center gap-1 w-8 h-8 absolute right-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <motion.div
          className="w-8 h-1 bg-black rounded"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-8 h-1 bg-black rounded"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-8 h-1 bg-black rounded"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Animated Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-2 mt-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
      >
              <ul className="flex flex-col px-2 py-2 gap-2 ">
                  <Link href="/"    onClick={toggleMenu} className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Home
                  </Link>
                  <Link href="/aboutUs"    onClick={toggleMenu} className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  About Us
                  </Link>
                  <Link href="/contactUs"    onClick={toggleMenu}className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Contact Us
                  </Link>
                  <Link href="/services"   onClick={toggleMenu} className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
               Services
                  </Link>
                  <Link href="/signIn" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
               Sign In
                  </Link>
                  <Link href="/signUp"   onClick={toggleMenu} className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Sign Up
                  </Link>
         
        </ul>
      </motion.div>
    </div>
  );
}
