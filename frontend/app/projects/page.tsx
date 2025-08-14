"use client";

import { fetchProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import { Project } from "@/types";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-100 rounded-full p-4 inline-flex shadow-md">
              <FaLaptopCode className="text-blue-700 text-3xl" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore My Top Projects
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover the projects I&apos;ve built with passion and dedication. Each one represents a unique challenge and learning experience.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project._id || idx}
              variants={cardVariants}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-gray-800 font-bold text-xl group-hover:text-blue-700 transition-colors duration-200">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-*">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <span className="text-gray-700 font-semibold text-sm">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={project.githubUrl}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:underline transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {projects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <FaLaptopCode className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-gray-600 text-xl font-semibold mb-2">Loading Projects...</h3>
            <p className="text-gray-500">Please wait while we fetch the latest projects.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;