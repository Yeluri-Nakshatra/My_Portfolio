import React from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e2e] text-white py-4 px-4 border-t border-[#22D3EE]/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        
        {/* Name */}
        <h2 className="text-xl font-semibold text-white">Nakshatra Yeluri</h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm  text-white">
          <Link to="aboutme" smooth duration={500} className="cursor-pointer hover:text-[#22D3EE]">About</Link>
          <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-[#22D3EE]">Skills</Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-[#22D3EE]">Projects</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-[#22D3EE]">Contact</Link>
        </div>

        {/* Contact and Socials */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm mt-2">
         
          
          <div className="flex gap-4 text-xl text-white">
            <a href="https://github.com/Yeluri-Nakshatra" target="_blank" rel="noreferrer" className="hover:text-[#22D3EE] duration-200 hover:scale-[1.1]"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nakshatra-yeluri" target="_blank" rel="noreferrer" className="hover:text-[#22D3EE] duration-200 hover:scale-[1.1]"><FaLinkedin /></a>
            <a href="https://x.com/nakshatrayeluri" target="_blank" rel="noreferrer" className="hover:text-[#22D3EE] duration-200 hover:scale-[1.1]"><FaTwitter /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-2" />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} – All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
