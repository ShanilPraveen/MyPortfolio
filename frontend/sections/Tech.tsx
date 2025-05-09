"use client";
import { motion } from "framer-motion";
import { LuCodesandbox } from "react-icons/lu";

const Tech = () => {
  return (
    <section className="flex flex-col bg-white sm:pt-10 items-center sm:items-start w-full">
      <div className="sm:ml-30 sm:w-2/5 sm:p-0 p-10 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-black font-bold text-2xl sm:text-4xl"
        >
          Technologies I Work With
        </motion.h1>
        <h1 className="text-black font-medium text-1xl mt-4">
          {" "}
          I am proficient in a variety of programming languages and
          frameworks.My toolkit includes modern technologies that enhance my
          development capabilities.
        </h1>
      </div>

      <div className="flex flex-col items-center sm:items-start sm:flex-row space-y-4 sm:space-y-0 justify-between sm:mt-10 sm:mx-30">
        <div className="flex flex-col sm:w-3/10 w-2/3 space-y-3 border-1 border-black rounded-sm p-5 hover:transition-transform hover:scale-105 duration-300">
          <LuCodesandbox className="text-black text-5xl" />
          <h1 className="text-black font-semibold text-1xl">
            Programming Languages
          </h1>
          <h1 className="text-black font-medium text-1xl">
            JavaScript,Python,Java and C++ are my primary languages.
          </h1>
        </div>
        <div className="flex flex-col sm:w-3/10 w-2/3 space-y-3 border-1 border-black rounded-sm p-5 hover:transition-transform hover:scale-105 duration-300">
          <LuCodesandbox className="text-black text-5xl" />
          <h1 className="text-black font-semibold text-1xl">
            Frameworks & Libraries
          </h1>
          <h1 className="text-black font-medium text-1xl">
            I utilize React ,Node.js ,MogoDB and SQL for my projects.
          </h1>
        </div>
        <div className="flex flex-col sm:w-3/10 w-2/3 space-y-3 border-1 border-black rounded-sm p-5 hover:transition-transform hover:scale-105 duration-300">
          <LuCodesandbox className="text-black text-5xl" />
          <h1 className="text-black font-semibold text-1xl">
            Tools & Technologies
          </h1>
          <h1 className="text-black font-medium text-1xl">
            Git,Docker and GCP are intregal to my workflow.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Tech;
