import React from "react";
import { Element } from "react-scroll";
import Profile from "../../assets/pp.png";
import { ReactTyped } from "react-typed";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Element
      name="home"
      className="md:min-h-screen h-[90vh]  md:mx-10    text-white flex flex-col-reverse md:flex-row md:justify-between justify-center  md:pt-14 md:mt-0 mt-16 md:px-14 items-center"
    >
      {/* Left Content */}
      <motion.div
        className="md:w-[50%] w-[90%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex md:gap-2 gap-1 md:px-0 px-8 flex-col">
          <motion.div
            className="font-semibold text-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, Myself
          </motion.div>

          <motion.div
            className="font-bold text-2xl md:text-4xl text-[#22D3EE]"
            transition={{ delay: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Nakshatra Yeluri
          </motion.div>

          <motion.div
            className="md:text-[50px] text-[30px] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm a{" "}
            <span
              style={{ fontFamily: "bignoodletitling" }}
              className="leading-tight text-[#22D3EE]"
            >
              <ReactTyped
                strings={["Web Developer", "UI/UX Designer"]}
                typeSpeed={200}
                backSpeed={50}
                loop
              />
            </span>
          </motion.div>

          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a Full Stack MERN Developer with a front-end focus, skilled in
            building responsive interfaces using React and Tailwind CSS. With a
            UI design background in Figma, I bridge design and development to
            create pixel-perfect, user-friendly web experiences.
          </motion.p>

          <motion.div
            className="flex flex-row gap-4 my-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/nakshatra-yeluri"},
              { icon: <FiGithub />, link: "https://github.com/Yeluri-Nakshatra" },
              { icon: <SlSocialTwitter />, link: "https://x.com/nakshatrayeluri" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ scale: 1.2, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                target="_blank"
                className="border rounded-full p-2 text-sm border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-black hover:shadow-md hover:shadow-[#22D3EE]"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="/my-cv.pdf"
              download="Nakshatra_Yeluri_CV.pdf"
              className="p-2 px-4 rounded-[30px] hover:bg-[#22D3EE] text-white hover:text-black font-semibold  duration-200 visit border  border-[#22D3EE]"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-[500px]   md:h-[500px] w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={Profile} alt="profile" className="w-full h-full" />
      </motion.div>
    </Element>
  );
};

export default Home;
