"use client";

import { fetchProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Project } from "@/types";

function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 2 < projects.length) setStartIndex(startIndex + 1);
  };

  return (
    <section className="bg-white px-8 space-y-6 text-center sm:w-full flex flex-col h-screen items-center sm:pt-20">
      <h1 className="text-black font-bold text-3xl">Featured Projects</h1>
      <p className="text-black font-medium">Explore My Top Projects Below</p>

      <div className="relative flex justify-center items-center space-x-4 w-5/6 h-full">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          <FaArrowLeft className="text-black text-2xl" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            className="flex gap-4 w-full justify-center"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {projects.slice(startIndex, startIndex + 2).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        <button onClick={handleNext} disabled={startIndex + 2 >= projects.length}>
          <FaArrowRight className="text-black text-2xl" />
        </button>
      </div>

      <a className="bg-black text-white px-4 py-2  rounded inline-block" href="/projects">
        View All Projects
      </a>
    </section>
  );
}

export default ProjectsSection;
