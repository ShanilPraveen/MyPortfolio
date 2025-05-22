"use client";

import React from "react";
import Image from "next/image";
import hiking from "../../images/hiking.jpg";
import photography from "../../images/photography.jpg";
import music from "../../images/music.jpg";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCode,
  FaDatabase,
  FaCloud,
  FaCamera,
  FaMusic,
  FaMountain,
  FaImage,
  FaAward,
} from "react-icons/fa";

import mem1 from "../../images/Memo/1.jpg";
import mem1_1 from "../../images/Memo/1.1.jpg";
import mem2 from "../../images/Memo/2.jpg";
import mem3 from "../../images/Memo/3.jpg";
import mem4 from "../../images/Memo/4.jpg";
import mem5 from "../../images/Memo/5.jpg";
import mem6 from "../../images/Memo/6.jpg";
import mem7 from "../../images/Memo/7.jpeg";
import mem8 from "../../images/Memo/8.jpg";
import mem9 from "../../images/Memo/9.jpg";
import mem10 from "../../images/Memo/10.jpg";
import mem11 from "../../images/Memo/11.jpg";
import mem12 from "../../images/Memo/12.jpg";
import mem13 from "../../images/Memo/13.jpg";
import mem14 from "../../images/Memo/14.jpg";
import mem15 from "../../images/Memo/15.jpg";
import mem16 from "../../images/Memo/16.jpg";
import mem17 from "../../images/Memo/17.jpg";
import mem18 from "../../images/Memo/18.jpg";
import mem19 from "../../images/Memo/19.jpg";

const galleryImages = [
  {
    src: mem1,
    alt: "Memory 1",
  },
  {
    src: mem1_1,
    alt: "Memory 1",
  },
  {
    src: mem2,
    alt: "Memory 2",
  },
  {
    src: mem3,
    alt: "Memory 3",
  },
  {
    src: mem4,
    alt: "Memory 4",
  },
  {
    src: mem5,
    alt: "Memory 5",
  },
  {
    src: mem6,
    alt: "Memory 6",
  },
  {
    src: mem7,
    alt: "Memory 7",
  },
  {
    src: mem8,
    alt: "Memory 8",
  },
  {
    src: mem9,
    alt: "Memory 9",
  },
  {
    src: mem10,
    alt: "Memory 10",
  },
  {
    src: mem11,
    alt: "Memory 11",
  },
  {
    src: mem12,
    alt: "Memory 12",
  },
  {
    src: mem13,
    alt: "Memory 13",
  },
  {
    src: mem14,
    alt: "Memory 14",
  },
  {
    src: mem15,
    alt: "Memory 15",
  },
  {
    src: mem16,
    alt: "Memory 16",
  },
  {
    src: mem17,
    alt: "Memory 17",
  },
  {
    src: mem18,
    alt: "Memory 18",
  },
  {
    src: mem19,
    alt: "Memory 19",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            A passionate developer and lifelong learner with diverse interests
            and experiences.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8 flex items-center"
          >
            <FaBook className="mr-2 text-blue-600" />
            Education
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={slideIn}>
              <div className="rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <FaBook className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      University of Moratuwa, Sri Lanka
                    </h4>
                    <p className="text-blue-600">2022 - Present</p>
                  </div>
                </div>
                <p className="text-blue-800">
                  Currently pursuing a Bachelor's degree in Computer Science, I
                  am gaining a strong foundation in data science, advanced
                  algorithms, artificial intelligence, and software engineering
                  principles. My university has been instrumental in deepening
                  my technical skills and broadening my perspective on
                  real-world problem solving. The intellectually stimulating
                  environment, combined with opportunities for research, coding
                  competitions, and collaborative projects, continues to
                  challenge and inspire me.
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideIn}>
              <div className="rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <FaBook className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      Taxila Central College Horana
                    </h4>
                    <p className="text-blue-600">2013 - 2021</p>
                  </div>
                </div>
                <p className="text-blue-800">
                  My journey in technology and creativity would not have been
                  possible without the strong foundation laid by my school. It
                  provided an environment that nurtured curiosity, discipline,
                  and a deep appreciation for learning. The guidance of
                  dedicated teachers and the support of a vibrant academic
                  community played a pivotal role in shaping my path. I owe much
                  of my progress and perseverance to the values and knowledge
                  instilled during those formative years.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8 flex items-center"
          >
            <FaCode className="mr-2 text-blue-600" />
            Current Explorations
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp}>
              <div className="h-full rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-blue-100">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <FaCode className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Full-stack Development
                </h4>
                <p className="text-blue-800 text-sm">
                  Building responsive and scalable web applications using modern
                  frameworks and technologies, focusing on both frontend
                  aesthetics and backend performance.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="h-full rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-blue-100">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <FaCloud className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Cloud Computing
                </h4>
                <p className="text-blue-800 text-sm">
                  Exploring infrastructure as code, serverless architectures,
                  and cloud-native development to build resilient and scalable
                  applications.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="h-full rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-blue-100">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <FaDatabase className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Databases
                </h4>
                <p className="text-blue-800 text-sm">
                  Working with SQL and NoSQL databases, data modeling, and
                  optimization techniques to create efficient data storage
                  solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="h-full rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-blue-100">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <FaCode className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  AI/ML
                </h4>
                <p className="text-blue-800 text-sm">
                  Diving into machine learning algorithms, neural networks, and
                  data analysis to create intelligent applications that solve
                  real-world problems.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8 flex items-center"
          >
            <FaAward className="mr-2 text-blue-600" />
            Personal Interests
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="h-full rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-blue-100">
                <div className="h-64">
                  <Image
                    src={photography}
                    alt="Photography"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <FaCamera className="text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      Photography
                    </h4>
                  </div>
                  <p className="text-blue-800">
                    Capturing moments and perspectives through the lens. I
                    specialize in landscape and street photography, always
                    looking for unique compositions and lighting that tell a
                    story.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <div className="h-full rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-blue-100">
                <div className="h-64">
                  <Image
                    src={hiking}
                    alt="Hiking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <FaMountain className="text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      Hiking
                    </h4>
                  </div>
                  <p className="text-blue-800">
                    Exploring nature and challenging myself on various trails.
                    There's something profoundly rewarding about reaching a
                    summit and taking in the panoramic views after a challenging
                    hike.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <div className="h-full rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-blue-100">
                <div className="h-64">
                  <Image
                    src={music}
                    alt="Music"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <FaMusic className="text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      Music
                    </h4>
                  </div>
                  <p className="text-blue-800">
                    Finding inspiration and relaxation through various genres. I
                    enjoy creating playlists that match my mood and enhance
                    productivity while coding or studying.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-8 flex items-center">
            <FaImage className="mr-2 text-blue-600" />
            Experiences & Memories
          </h3>

          <div className="rounded-lg shadow-lg bg-white p-6 mb-8 border border-blue-100">
            <p className="text-blue-800 mb-6">
              Throughout my journey, I've participated in various programs,
              projects, and memorable experiences that have shaped my skills and
              perspective. Each opportunity and cherished memory has contributed
              to my growth as a developer, problem solver, and individual,
              inspiring me to keep exploring and learning beyond the screen.
            </p>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-md break-inside-avoid"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="max-w-4xl mx-auto mb-12 h-px bg-blue-200"></div>

          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-6">
            "Stay curious. Keep building. Explore beyond the screen."
          </h3>

          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            This philosophy guides my approach to both technology and life. I
            believe in continuous learning, creating meaningful projects, and
            finding inspiration in the world around us.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
