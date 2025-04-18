"use client";
import { motion } from "framer-motion";
import me from "../images/me.png";
import Image from "next/image";

const sentence = "I'm a Computer Science & Engineering undergraduate dedicated to creating innovative solutions through technology. Join me in my journey as I explore the intersection of code and creativity.";
const words = sentence.split(" ");

const Hero = () => {
  return (
    <section className="flex bg-white justify-between">
      <div className="flex flex-col justify-center items-center p-10 sm:p-0 sm:ml-40 sm:w-2/5"> 
        <motion.h1
          className="text-black font-bold text-2xl sm:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Meet Shanil Praveen : Your Future Tech Partner
        </motion.h1>

        <motion.h1
          className="text-black font-medium text-1xl pt-10 flex flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
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
        </motion.h1>

        <div className="flex mt-10 justify-around sm:justify-normal w-3/5 sm:w-full">
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-800">My Work</button>
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-700 ml-5">About Me</button>
        </div>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden sm:flex mr-30"
      >
        <Image src={me} alt="Picture of the author" width={500} height={500} />
      </motion.div>
    </section>
  );
};

export default Hero;
