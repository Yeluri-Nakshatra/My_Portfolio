import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const data = {
  experience: [
    {
      role: "Full Stack Developer",
      company: "Techbuggy",
      duration: "2024-Present",
    },
    {
      role: "UI/UX Designer (Summer Internship)",
      company: "MA Studio",
      duration: "May 2025-Present",
    },
  ],
  education: [
    {
      role: "B.Tech – Computer Science Engineering (3rd year)",
      company:
        "Rajiv Gandhi University of Knowledge Technologies  (RGUKT Nuzvid)",
      duration: "2023–Present",
    },
    {
      role: "Pre University Course",
      company:
        "Rajiv Gandhi University of Knowledge Technologies  (RGUKT Nuzvid)",
      duration: "2021–2023",
    },
    {
      role: "10th Grade",
      company: "Chimakurthy High School",
      duration: "2020-2021",
    },
  ],
};

export const EduExp = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="w-full   text-white px-6 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#22D3EE] mb-8">
          Education & Experience
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["education", "experience"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <div key={tab} className="relative">
                {/* Active Background Animation */}
                {isActive && (
                  <motion.div
                    layoutId="tab-highlight"
                    className="absolute inset-0 rounded-full bg-[#22D3EE] z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Tab Button */}
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`
            relative z-10 flex items-center justify-center gap-2 
            px-4 py-2 text-sm sm:text-base font-semibold 
            rounded-full border-2 border-teal-400 
            transition-all duration-300 min-w-[140px]
            ${isActive ? "text-black" : "text-white hover:text-cyan-300"}
          `}
                >
                  {tab === "experience" ? <FaBriefcase /> : <FaGraduationCap />}
                  {tab === "experience" ? "Work Experience" : "Education"}
                </button>
              </div>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data[activeTab].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.4 }}
              className="bg-[#11152E] p-6 rounded-lg border-l-4 border-cyan-400 shadow shadow-cyan-700/10 text-left"
            >
              <div className="flex items-center gap-3 text-[#00FFFF]">
                {activeTab === "experience" ? (
                  <FaBriefcase className="text-xl" />
                ) : (
                  <FaGraduationCap className="text-xl" />
                )}
                <h3 className="text-lg font-semibold">{item.role}</h3>
              </div>
              <p className="text-gray-300 mt-1 font-semibold">{item.company}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
