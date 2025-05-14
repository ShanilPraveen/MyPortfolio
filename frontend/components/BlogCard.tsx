import React from "react";
import {Blog} from "@/types";

  const BlogCard = ({ blog }: {blog : Blog}) => {
    return (
      <div className="flex flex-col space-y-3 border border-black rounded-sm p-5 w-full h-4/5 overflow-hidden">
        <div className="w-full h-50 bg-gray-200 flex items-center justify-center overflow-hidden rounded">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-black font-semibold text-xl truncate">
          {blog.title}
        </h1>
  
        <p className="text-black text-sm line-clamp-2">
          {blog.description}
        </p>


        <a
          href="/blog"
          className="text-blue-600 mt-auto text-sm"
          target="_blank"
        >
          View Blog →
        </a>
      </div>
    );
  };

export default BlogCard;
