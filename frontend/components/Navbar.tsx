"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm sticky w-full top-0 sm:py-5 py-3 flex sm:justify-center justify-end z-50">
      <div className="hidden sm:flex w-4/5 justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
          My Portfolio
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link 
              href="/" 
              className={`text-lg font-semibold relative after:content-[''] after:absolute after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:text-blue-700 ${
                pathname === "/" 
                  ? "text-blue-700 after:w-full" 
                  : "text-gray-800 after:w-0 hover:after:w-full"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`text-lg font-semibold relative after:content-[''] after:absolute after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:text-blue-700 ${
                pathname === "/about" 
                  ? "text-blue-700 after:w-full" 
                  : "text-gray-800 after:w-0 hover:after:w-full"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`text-lg font-semibold relative after:content-[''] after:absolute after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:text-blue-700 ${
                pathname === "/projects" 
                  ? "text-blue-700 after:w-full" 
                  : "text-gray-800 after:w-0 hover:after:w-full"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`text-lg font-semibold relative after:content-[''] after:absolute after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:text-blue-700 ${
                pathname === "/blog" 
                  ? "text-blue-700 after:w-full" 
                  : "text-gray-800 after:w-0 hover:after:w-full"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`text-lg font-semibold relative after:content-[''] after:absolute after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:text-blue-700 ${
                pathname === "/contact" 
                  ? "text-blue-700 after:w-full" 
                  : "text-gray-800 after:w-0 hover:after:w-full"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {!isMenuOpen && (
        <FaBars
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl cursor-pointer mr-5 text-blue-700"
        />
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center"
            key="mobileMenu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col space-y-6 p-5 text-center">
              <li>
                <Link 
                  href="/" 
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    pathname === "/" ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    pathname === "/about" ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    pathname === "/projects" ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    pathname === "/blog" ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    pathname === "/contact" ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <FaTimes
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-2xl cursor-pointer absolute top-5 right-5 text-blue-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;