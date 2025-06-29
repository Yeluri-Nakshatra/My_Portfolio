import React from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiRedux } from 'react-icons/si'
import { PiFigmaLogoFill } from "react-icons/pi";
const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Node.js', icon: <FaNode /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Figma', icon: <PiFigmaLogoFill /> },

];

const Skills = () => {
  return (
    <Element name='skills' className=' text-white md:mx-10 mx-8'>
      <section id="skills" className="w-full py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          {/* Title Animation */}
          <motion.div
    
            
            className="text-3xl md:text-4xl font-bold mb-6 text-[#22D3EE]"
          >
            My Skills
          </motion.div>

          {/* Description Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            
            className="text-gray-400 mb-12"
          >
            Here are some of the technologies I’ve worked with:
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100,x: Math.floor(index / 2) % 2 === 0 ? 60 : -60, scale: 0.2 }}
                whileInView={{ opacity: 1, y: 0,x:0, scale: 1 }}
                
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                viewport={{once:false,amount:0.2}}
                className=" p-6 rounded-xl flex flex-col justify-center items-center "
              >
                <div style={{ animationDelay: `${index * 0.8}s` }} className="text-5xl mb-2 p-2 text-[#22D3EE] shadow-md shadow-[#22D3EE] cursor-pointer animate-float ">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Skills
