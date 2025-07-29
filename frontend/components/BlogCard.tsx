import React from "react";
import {Blog} from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex flex-col space-y-3 border border-gray-200 rounded-lg shadow-md p-5 w-full h-full overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          className="object-cover w-full h-full"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-gray-800 font-semibold text-xl truncate">
        {blog.title}
      </h1>

      <p className="text-gray-600 text-sm line-clamp-2">
        {blog.description}
      </p>

      <Link
        href={"/blogs"}
        className="text-blue-600 hover:text-blue-800 mt-auto text-sm font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View blog →
      </Link>
    </div>
  );
};

export default BlogCard;