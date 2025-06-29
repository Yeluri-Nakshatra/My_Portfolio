import React from "react";
import { Element } from "react-scroll";
import {
  FaUserGraduate,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {EduExp} from "./EduExp"

const AboutMe = () => {
  return (
    <Element name="aboutme" className="py-10 md:py-0 md:mx-10 mx-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[40px] text-[#22D3EE] font-bold"
      >
        About me
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex md:flex-row flex-col items-center justify-between px-6 md:px-20 py-10"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-[50%] w-full items-center"
        >
          <div className="space-y-6">
            {/* Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border rounded-xl hover:shadow-[#22D3EE] shadow-md cursor-pointer p-4 flex-1 text-center"
              >
                <FaBriefcase className="text-2xl mx-auto text-[#22D3EE] mb-2" />
                <h3 className="font-bold text-lg">Role</h3>
                <p className="text-sm text-gray-400">
                  Web Developer <br /> UI Designer
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border rounded-xl hover:shadow-[#22D3EE] shadow-md cursor-pointer p-4 flex-1 text-center"
              >
                <FaUserGraduate className="text-2xl mx-auto text-[#22D3EE] mb-2" />
                <h3 className="font-bold text-lg">Education</h3>
                <p className="text-sm text-gray-400">
                  B.Tech – CSE (3rd year)
                  <br />
                  RGUKT Nuzvid
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-md leading-relaxed"
            >
              Full Stack MERN Developer with a frontend focus, skilled in React,
              Tailwind CSS, and UI/UX design (Figma). I build responsive,
              user-friendly web applications and scalable backends using Express
              and MongoDB.
            </motion.p>
          </div>
        </motion.div>

        {/* Divider (hidden on mobile) */}
        <div className="hidden md:flex justify-center items-center">
          <div className="vertical-line-wrapper">
            <div className="vertical-line"></div>
          </div>
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 col-span-1 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold text-cyan-400 border-b border-cyan-800 pb-3">
            Personal Information
          </h3>
          <div className="text-sm text-gray-300 space-y-5">
            <motion.div className="flex items-start gap-3">
              <FaUserGraduate className="text-cyan-400 mt-1" />
              <div>
                <p className="text-gray-400 font-semibold text-sm">Name</p>
                <p className="text-base font-normal text-white">
                  Nakshatra Yeluri
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3">
              <FaEnvelope className="text-cyan-400 mt-1" />
              <div>
                <p className="text-gray-400 font-semibold text-sm">Email</p>
                <p className="text-base font-normal text-white">
                  nakshatra.yeluri@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3">
              <FaPhone className="text-cyan-400 mt-1" />
              <div>
                <p className="text-gray-400 font-semibold text-sm">Phone</p>
                <p className="text-base font-normal text-white">
                  +91 8008647735
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-cyan-400 mt-1" />
              <div>
                <p className="text-gray-400 font-semibold text-sm">Location</p>
                <p className="text-base font-normal text-white">
                  Prakasam, Andhra Pradesh
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3">
              <svg
                className="text-cyan-400 w-5 h-5 mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.9 2.1C6.1 2.1 2.1 6.1 2.1 10.9c0 2.4.9 4.6 2.4 6.2L1 21.6 2.4 23l4.5-3.5c1.7 1.5 3.8 2.4 6.2 2.4 4.8 0 8.8-4 8.8-8.8 0-4.8-4-8.8-8.8-8.8z" />
              </svg>
              <div>
                <p className="text-gray-400 font-semibold text-sm">Interests</p>
                <p className="text-base font-normal text-white">
                  Web development, UI/UX Design, Coding
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <EduExp/>
    </Element>
  );
};

export default AboutMe;
