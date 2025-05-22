import React from "react";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col space-y-3 border border-gray-200 rounded-lg shadow-md p-5 w-full h-full overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="text-gray-800 font-semibold text-xl truncate">
        {project.title}
      </h1>

      <p className="text-gray-600 text-sm line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 text-gray-700">
        <span className="font-medium">Tech Stack:</span>
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a
        href={project.githubUrl}
        className="text-blue-600 hover:text-blue-800 mt-auto text-sm font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View project →
      </a>
    </div>
  );
};

export default ProjectCard;