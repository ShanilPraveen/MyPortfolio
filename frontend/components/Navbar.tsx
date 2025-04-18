"use client";
import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black w-full top-0 sm:py-5 py-2 flex sm:justify-center justify-end">
      <div className="hidden sm:flex w-4/5 justify-between items-center">
        <div className="text-lg font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-green-400 font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400 font-bold">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-400 font-bold">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-green-400 font-bold">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-400 font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {!isMenuOpen && (
        <FaBars
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl cursor-pointer mr-5"
        />
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden absolute top-0 left-0 w-full h-max bg-white flex items-center justify-center"
            key="mobileMenu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col space-y-3 p-5">
              <li>
                <Link href="/" className="hover:text-green-400 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-green-400 font-medium"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-400 font-meduim">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <FaTimes
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-2xl cursor-pointer absolute top-5 right-5"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
