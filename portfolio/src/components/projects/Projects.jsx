import React from "react";
import { Element } from "react-scroll";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiFigma, SiSketch } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
const projects = [
  {
    title: "Teckzite2k25",
    description:
      "As part of the web team for our college's technical fest, I focused on UI design and contributed significantly to frontend development.",
    image: "./teckzite2k25.png",
    tools: [<SiFigma key="figma" />, <FaReact key="react" />],
    link: "https://teckzite.org",
    type: "Web",
  },
  {
    title: "Alumni",
    description:
      "Contributed to the frontend development of our college’s alumni portal, designed to foster ongoing collaboration and engagement with former students.",
    image: "./alumni.png",
    tools: [<FaReact key="react" />],
    link: "https://alumni-repo.vercel.app/",
    type: "Web",
  },
  {
    title: "Filmymoji website (Cloned from Axiom)",
    description:
      "To strengthen my frontend skills, I replicated this website with a new theme and tailored content.",
    image: "./filmymoji.png",
    tools: [
      <FaHtml5 key="html" />,
      <SiTailwindcss key="tailwind" />,
      <FaJsSquare key="tailwind" />,
    ],
    link: "https://team-html.vercel.app/task.html",
    type: "Web",
  },
  {
    title: "Locus",
    description:
      "Contributed as a UI/UX designer for a mobile app focused on location-based information sharing, enhancing user experience and interface consistency.",
    image: "./locus.png",
    tools: [<SiFigma key="figma" />],
    link: "./locus.mp4",
    type: "UI/UX",
  },
  {
    title: "Local Skill Connect",
    description:
      "Designed the user interface for a mobile app that connects service providers with service users, acting as a mediator platform.",
    image: "./localskillconnect.png",
    tools: [<SiFigma key="figma" />],
    link: "./localskillconnect.mp4",
    type: "UI/UX",
  },
];

const Projects = () => {
  return (
    <Element name="projects" className=" py-10 md:mx-10 mx-8 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#22D3EE] mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>

        <motion.div className=" flex  flex-wrap gap-16 md:justify-start w-full items-stretch ">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className=" w-full md:w-[28%] h-full"
            >
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#22D3EE"
                glarePosition="all"
                transitionSpeed={5000}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="w-full  rounded-2xl overflow-hidden"
              >
                <div className="rounded-2xl border h-full cursor-pointer overflow-hidden flex flex-col p-4 pb-8 shadow-md shadow-[#22D3EE] gap-8 transition-all duration-300 bg-[#0f172a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:h-48 h-36 object-cover rounded-2xl"
                  />
                  <div>
                    <div className="flex gap-4 mb-1 w-full">
                      <h3 className="md:text-lg text-md font-semibold text-white ">
                        {project.title}
                      </h3>
                      <button
                        className={`px-3 py-0 text-xs h-6 rounded-2xl text-black font-semibold ${
                          project.type === "Web"
                            ? "bg-[#22D3EE]"
                            : "bg-[#cf52b4]"
                        }`}
                      >
                        {project.type}
                      </button>
                    </div>
                    <p className="md:text-xs text-[10px] text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 text-lg mb-3 text-[#22D3EE]">
                      {project.tools.map((tool, i) => (
                        <span key={i}>{tool}</span>
                      ))}
                    </div>
                    <div className="w-full text-right">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-[10px] visit text-[#22D3EE] hover:bg-[#22D3EE] font-semibold hover:text-black p-2 px-4 rounded-full items-center gap-2 md:text-sm transition"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Element>
  );
};

export default Projects;
