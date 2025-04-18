"use client";
import { motion } from "framer-motion";
import bike from "../images/bike.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="flex sm:flex-col bg-white sm:pt-20 sm:space-y-5 sm:w-full sm:justify-between sm:items-center h-1/2 ">
      <h1 className="text-black font-bold text-2xl sm:text-4xl">
        Featured Projects
      </h1>
      <h1 className="text-black font-medium text-1xl mt-4">
        Explore My Projects Below
      </h1>
      <div className="flex sm:flex-row w-full px-20 border-1 border-black ">
        <div className="flex flex-col space-y-3 border-1 border-black rounded-sm p-5 w-2/5">
            <Image
              src={bike}
              alt="Bike"
              width={200}
              height={200}/>
              <h1 className="text-black font-medium text-1.5xl">Title of the Project</h1>
              <p className="text-black font-medium text-1xl">Description of the project aaaaaaaa a a a aa  aaaaaaaa a a aaaaaaaaaaaa a aa  a</p>
              <h1 className="text-black font-medium text-1xl">Tech Stack aaaaada asd asdasd dasd asdada asdasdad</h1>
        </div>
        <div className="flex flex-col space-y-3 border-1 border-black rounded-sm p-5 w-2/5">
            <Image
              src={bike}
              alt="Bike"
              width={200}
              height={200}/>
              <h1 className="text-black font-medium text-1.5xl">Title of the Project</h1>
              <p className="text-black font-medium text-1xl">Description of the project aaaaaaaa a a a aa  aaaaaaaa a a aaaaaaaaaaaa a aa  a</p>
              <h1 className="text-black font-medium text-1xl">Tech Stack aaaaada asd asdasd dasd asdada asdasdad</h1>
        </div>
      </div>
      <button className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-700 ml-5">
        View All Projects
      </button>
    </section>
  );
};

export default Projects;
