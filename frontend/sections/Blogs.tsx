"use client";

import { fetchBlogs } from "@/lib/api";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { Blog } from "@/types";

function BlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + (isMobile ? 1 : 3) < blogs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const blogsToDisplay = isMobile ? 1 : 3;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-white to-blue-600 px-4 md:px-8 space-y-6 text-center w-full flex flex-col min-h-screen items-center pt-10 sm:pt-20">
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 rounded-full p-3 inline-flex">
            <IoNewspaperSharp className="text-blue-800 text-2xl" />
          </div>
        </div>
        <h1 className="text-blue-900 font-bold text-3xl md:text-4xl mb-3">
          Featured Blogs
        </h1>
        <p className="text-blue-700 font-medium max-w-2xl mx-auto text-lg">
          Explore My Top Blogs Below
        </p>
        <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative w-full max-w-6xl py-8">
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`absolute left-0 z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              startIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            aria-label="Previous blog"
          >
            <FaArrowLeft className="text-lg" />
          </button>

          <div className="w-full px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {blogs
                  .slice(startIndex, startIndex + blogsToDisplay)
                  .map((blog) => (
                    <div key={blog._id} className="h-full">
                      <BlogCard blog={blog} />
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + blogsToDisplay >= blogs.length}
            className={`absolute right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              startIndex + blogsToDisplay >= blogs.length
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            aria-label="Next blog"
          >
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>

      <a
        className="bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white px-6 py-2 rounded-md inline-block font-medium transition-colors"
        href="/blogs"
      >
        View All Blogs
      </a>
    </section>
  );
}

export default BlogsSection;
