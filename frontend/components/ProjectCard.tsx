import React from "react";
import { Project } from "@/types";

  const ProjectCard = ({ project }: { project: Project }) => {
    return (
      <div className="flex flex-col space-y-3 border border-black rounded-sm p-5 w-full h-4/5 overflow-hidden">
        <div className="w-full h-50 bg-gray-200 flex items-center justify-center overflow-hidden rounded">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-black font-semibold text-xl truncate">
          {project.title}
        </h1>
  
        <p className="text-black text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 text-black ">Tech Stack :
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 text-black text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          className="text-blue-600 mt-auto text-sm"
          target="_blank"
        >
          View project →
        </a>
      </div>
    );
  };

export default ProjectCard;
