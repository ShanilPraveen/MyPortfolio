"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchProjects, fetchBlogs } from "@/lib/api";
import { deleteBlog, deleteProject } from "@/lib/api";
import ProjectModal from "@/components/ProjectModal";
import BlogModal from "@/components/BlogModal";
import {
  FiPlusCircle,
  FiTrash2,
  FiEdit,
  FiFolder,
  FiBookOpen,
} from "react-icons/fi";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.replace("/login");
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Checking User...</p>
      </div>
    );
  }

  const [projects, setProjects] = useState<
    { _id: string; title: string; description: string }[]
  >([]);
  const [blogs, setBlogs] = useState<
    { _id: string; title: string; description: string }[]
  >([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const fetchAndSetProjects = async () => {
    const projectsData = await fetchProjects();
    setProjects(projectsData);
  };

  const fetchAndSetBlogs = async () => {
    const blogsData = await fetchBlogs();
    setBlogs(blogsData);
  };

  useEffect(() => {
    fetchAndSetProjects();
    fetchAndSetBlogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 tracking-tight">
              Welcome to Your Dashboard, Shanil!
            </h1>
            <p className="mt-3 text-xl text-indigo-600">
              Manage your projects and blogs with ease
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowProjectModal(true)}
              className="flex items-center justify-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
            >
              <FiPlusCircle className="text-xl" />
              <span>Add Project</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBlogModal(true)}
              className="flex items-center justify-center gap-2 py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
            >
              <FiPlusCircle className="text-xl" />
              <span>Add Blog</span>
            </motion.button>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex-1 py-4 px-6 text-lg font-semibold flex items-center justify-center gap-2 ${
                  activeTab === "projects"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-indigo-500"
                }`}
              >
                <FiFolder />
                <span>Projects</span>
              </button>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`flex-1 py-4 px-6 text-lg font-semibold flex items-center justify-center gap-2 ${
                  activeTab === "blogs"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-purple-500"
                }`}
              >
                <FiBookOpen />
                <span>Blogs</span>
              </button>
            </div>

            <div className="p-6">
              {activeTab === "projects" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {projects.length === 0 ? (
                    <p className="text-gray-500 col-span-full text-center py-12">
                      No projects found. Add your first project!
                    </p>
                  ) : (
                    projects.map((project) => (
                      <motion.div
                        key={project._id}
                        variants={itemVariants}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
                          <h3 className="text-xl font-bold text-gray-800 truncate">
                            {project.title}
                          </h3>
                        </div>
                        <div className="p-5">
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex justify-end gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={async () => {
                                await deleteProject(project._id);
                                await fetchAndSetProjects();
                              }}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors duration-300"
                            >
                              <FiTrash2 className="text-lg" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-full transition-colors duration-300"
                            >
                              <FiEdit className="text-lg" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              )}

              {activeTab === "blogs" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {blogs.length === 0 ? (
                    <p className="text-gray-500 col-span-full text-center py-12">
                      No blogs found. Add your first blog post!
                    </p>
                  ) : (
                    blogs.map((blog) => (
                      <motion.div
                        key={blog._id}
                        variants={itemVariants}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
                          <h3 className="text-xl font-bold text-gray-800 truncate">
                            {blog.title}
                          </h3>
                        </div>
                        <div className="p-5">
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {blog.description}
                          </p>
                          <div className="flex justify-end gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={async () => {
                                await deleteBlog(blog._id);
                                await fetchAndSetBlogs();
                              }}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors duration-300"
                            >
                              <FiTrash2 className="text-lg" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 text-purple-500 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors duration-300"
                            >
                              <FiEdit className="text-lg" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {showProjectModal && (
          <ProjectModal
            onClose={() => setShowProjectModal(false)}
            onProjectAdded={fetchAndSetProjects}
          />
        )}
        {showBlogModal && (
          <BlogModal
            onClose={() => setShowBlogModal(false)}
            onBlogAdded={fetchAndSetBlogs}
          />
        )}
      </div>
    );
  }
};

export default AdminPage;
