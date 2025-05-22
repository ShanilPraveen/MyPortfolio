"use client";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa";

const Tech = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="flex flex-col bg-white sm:pt-20 py-16 items-center w-full overflow-hidden ">
      <div className="w-full max-w-6xl px-6 sm:px-0 justify-center items-center ">
     
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-black font-bold text-2xl sm:text-4xl relative "
        >
          Technologies I <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Work With</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 font-medium text-lg mt-4 max-w-2xl"
        >
          I am proficient in a variety of programming languages and
          frameworks. My toolkit includes modern technologies that enhance my
          development capabilities.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl mt-12 px-6 sm:px-0">
        <motion.div 
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="flex flex-col space-y-4 bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
            <FaCode className="text-blue-700 text-3xl" />
          </div>
          <h2 className="text-gray-900 font-bold text-xl">
            Programming Languages
          </h2>
          <p className="text-gray-700 font-medium">
            JavaScript, Python, Java and C++ are my primary languages.
          </p>
          <div className="pt-2 flex space-x-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Python</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Java</span>
          </div>
        </motion.div>
        
        <motion.div 
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="flex flex-col space-y-4 bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
            <FaLayerGroup className="text-blue-700 text-3xl" />
          </div>
          <h2 className="text-gray-900 font-bold text-xl">
            Frameworks & Libraries
          </h2>
          <p className="text-gray-700 font-medium">
            I utilize React, Next.js, TailwindCSS, Node.js, FastAPI, MongoDB and SQL for my projects.
          </p>
          <div className="pt-2 flex space-x-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">React</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">MongoDB</span>
          </div>
        </motion.div>
        
        <motion.div 
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="flex flex-col space-y-4 bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
            <FaTools className="text-blue-700 text-3xl" />
          </div>
          <h2 className="text-gray-900 font-bold text-xl">
            Tools & Technologies
          </h2>
          <p className="text-gray-700 font-medium">
            Git, Docker and GCP are integral to my workflow.
          </p>
          <div className="pt-2 flex space-x-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Git</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Docker</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">GCP</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;