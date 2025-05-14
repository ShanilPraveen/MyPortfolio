"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-600">About Me</h1>

      <p className="text-lg mb-6 leading-relaxed">
        Hello! 👋 I'm <span className="font-semibold text-black">[Your Name]</span>, a passionate Computer Science and Engineering undergraduate at the
        <span className="font-semibold text-black"> University of Moratuwa, Sri Lanka</span>.
        I'm currently diving deep into the world of technology, exploring areas like{" "}
        <span className="font-medium text-blue-700">Machine Learning</span>,{" "}
        <span className="font-medium text-blue-700">Data Science</span>,{" "}
        <span className="font-medium text-blue-700">Full Stack Development</span>, and{" "}
        <span className="font-medium text-blue-700">Cloud Technologies</span>.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        My academic journey began at <span className="font-semibold">[Your School Name]</span> where I built a strong foundation in problem-solving and critical thinking.
        Those early experiences, combined with my time at university, have shaped my curiosity and drive to build impactful software.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I'm especially interested in using data and code to solve real-world problems — whether that's building intelligent systems,
        creating clean and interactive web apps, or deploying scalable solutions on the cloud.
        I enjoy the challenge of constantly learning, and I believe in writing clean, efficient, and maintainable code.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        Outside the world of tech, you'll often find me capturing moments through my lens 📷,
        exploring mountain trails 🏞️, or getting lost in a good melody 🎶. Photography, music, and hiking help me find balance and creativity,
        both of which I bring into my work as a developer and thinker.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I’m always excited to collaborate on meaningful projects, contribute to open-source, or just connect with like-minded people.
        Feel free to check out my <a href="/projects" className="text-blue-500 underline">Projects</a> or{" "}
        <a href="/contact" className="text-blue-500 underline">get in touch</a> — I'd love to hear from you!
      </p>

      <p className="text-lg text-gray-600 mt-10 italic">
        “Stay curious. Keep building. Explore beyond the screen.”
      </p>
    </motion.div>
  );
}
