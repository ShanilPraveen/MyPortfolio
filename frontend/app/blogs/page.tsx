"use client";

import { fetchBlogs } from "@/lib/api";
import { useEffect, useState } from "react";
import { Blog } from "@/types";
import { IoNewspaperSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    getBlogs();
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
              <IoNewspaperSharp className="text-blue-700 text-3xl" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore My Blogs
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
            Explore my thoughts, ideas, and discoveries as I journey through the world of development. Each post captures a snapshot of what I’m learning, building, and reflecting on.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog._id || idx}
              variants={cardVariants}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-gray-800 font-bold text-xl group-hover:text-blue-700 transition-colors duration-200">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {blog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {blogs.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <IoNewspaperSharp className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-gray-600 text-xl font-semibold mb-2">Loading Blogs...</h3>
            <p className="text-gray-500">Please wait while we fetch the latest blogs.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;