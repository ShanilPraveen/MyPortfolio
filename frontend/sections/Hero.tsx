"use client";
import { motion } from "framer-motion";
import me from "../images/me.png";
import Image from "next/image";
import Link from "next/link";

const sentence = "I'm a Computer Science & Engineering undergraduate dedicated to creating innovative solutions through technology. Join me in my journey as I explore the intersection of code and creativity.";
const words = sentence.split(" ");

const Hero = () => {
  return (
    <section className="flex bg-gradient-to-r from-white to-blue-600 justify-between min-h-[85vh] relative overflow-hidden">
      <div className="flex flex-col justify-center items-start p-10 sm:p-0 sm:ml-40 sm:w-2/5 z-10"> 
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-3 px-4 py-1 bg-blue-50 rounded-full inline-block"
        >
        </motion.div>
        
        <motion.h1
          className="text-black font-bold text-2xl sm:text-5xl leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Meet <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Shanil Praveen</span>: Your Future Tech Partner
        </motion.h1>

        <motion.div
          className="text-gray-700 font-medium text-lg pt-6 flex flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="flex mt-10 justify-around sm:justify-normal w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
          >
            My Work
          </Link>
          <Link href='/about' className="border-2 border-blue-600 text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ml-5">
            About Me
          </Link>
        </motion.div>
        
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden sm:flex sm:items-center sm:justify-center relative mr-20"
      >
        <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-50 top-1/2 -translate-y-1/2 right-10 z-0"></div>
        <Image 
          src={me} 
          alt="Picture of the author" 
          width={500} 
          height={500} 
          className="z-10 relative"
          priority
        />
      </motion.div>
      
      <div className="absolute top-20 right-1/4 w-20 h-20 bg-blue-50 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-50 rounded-full opacity-20"></div>
    </section>
  );
};

export default Hero;
