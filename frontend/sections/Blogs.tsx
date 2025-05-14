"use client";

import { fetchBlogs } from "@/lib/api";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BlogCard from "@/components/BlogCard"
import { Blog } from "@/types";


const BlogsSection = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const getBlogs = async ()=>{
            const data = await fetchBlogs();
            setBlogs(data);
        }
        getBlogs();
    }, []);

    const handlePrev = ()=>{
        if (startIndex > 0) setStartIndex(startIndex - 1);
    }
    const handleNext =()=>{
        if (startIndex + 3 < blogs.length) setStartIndex(startIndex + 1);
    }


 return (
    <section className="bg-white px-8 space-y-6 text-center sm:w-full flex flex-col h-screen items-center sm:pt-20">
      <h1 className="text-black font-bold text-3xl">Featured Blogs</h1>
      <p className="text-black font-medium">Explore My Top Blogs Below</p>

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
            {blogs.slice(startIndex, startIndex + 3).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </motion.div>
        </AnimatePresence>

        <button onClick={handleNext} disabled={startIndex + 3 >= blogs.length}>
          <FaArrowRight className="text-black text-2xl" />
        </button>
      </div>

      <a className="bg-black text-white px-4 py-2 rounded" href="/blog">
        View All Blogs
      </a>
    </section>
  );
}

export default BlogsSection;

