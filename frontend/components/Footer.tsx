
import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-700 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4 text-white/90">Get In Touch</h3>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <IoIosMail size={16} />
              <Link href="mailto:shanilpraveen2000@gmail.com">shanilpraveen2000@gmail.com</Link>
            </p>
            <p className="text-gray-300 text-sm">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

      
          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4 text-white/90">Connect</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ShanilPraveen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shanil-praveen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61552762254541&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shanil Praveen. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

