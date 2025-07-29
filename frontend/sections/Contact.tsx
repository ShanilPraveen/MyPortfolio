import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import Image from "next/image";
import handshake from "../images/contact.jpg";
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 rounded-full p-3 inline-flex">
              <GrContact className="text-blue-800 text-2xl" />
            </div>
          </div>
          <h2 className="text-blue-900 font-bold text-3xl md:text-4xl mb-3">
            Get In Touch
          </h2>
          <p className="text-blue-700 font-medium max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 overflow-hidden border-2">
            <Image
              src={handshake}
              alt="Contact and communication"
              className="w-full h-70 rounded-lg object-cover shadow-md"
            />
            <div className="mt-6 bg-white border-2 p-4 rounded-lg hover:scale-[1.01] hover:shadow-xl">
              <div className="flex items-center">
                <div className="bg-blue-900 p-3 rounded-full mr-4">
                  <IoIosMail className="text-white  text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 ">
                    Email
                  </h3>
                  <Link href="/contact" className="text-black hover:underline">
                    Send Me an Email
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-2  rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <div className="flex items-center">
                <div className="mr-6">
                  <div className="bg-[#333] p-4 rounded-lg">
                    <FaGithub className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    GitHub
                  </h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Check out my code repositories
                  </p>
                  <Link
                    href="https://github.com/ShanilPraveen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:underline"
                  >
                    @ShanilPraveen
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <div className="flex items-center">
                <div className="mr-6">
                  <div className="bg-[#054c94] p-4 rounded-lg">
                    <IoLogoLinkedin className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    LinkedIn
                  </h3>
                  <p className="text-blue-700 text-sm mb-3">Connect with me</p>
                  <Link
                    href="https://www.linkedin.com/in/shanil-praveen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:underline"
                  >
                    Shanil Praveen
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <div className="flex items-center">
                <div className="mr-6">
                  <div className="bg-[#1877F2] p-4 rounded-lg">
                    <FaFacebook className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    Facebook
                  </h3>
                  <p className="text-blue-700 text-sm mb-3">Follow me</p>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61552762254541&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:underline"
                  >
                    @shanilpraveen
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
