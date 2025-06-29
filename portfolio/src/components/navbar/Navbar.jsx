import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";
import Button from "../../assets/button.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["AboutMe", "Skills", "Projects"];

  const mobileMenuRef = useRef(null);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="bg-white/10 backdrop-blur-md mx-10 border fixed w-[85%] md:w-full mt-6  border-white/20 shadow-lg text-white px-4 py-[8px] rounded-[20px] max-w-6xl  flex items-center justify-between z-50 "
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 ">
        <Link
          to={"home"}
          smooth={true}
          duration={300}
          spy={true}
          onClick={() => {
            window.history.replaceState(null, "", `home`);
          }}
          className="font-bold text-[#22D3EE] cursor-pointer text-xl "
        >
          Nakshatra Yeluri
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={300}
            offset={-100}
            spy={true}
            onSetActive={() => {
              window.history.replaceState(null, "", `${item.toLowerCase()}`);
            }}
            activeClass="glowing text-teal-400"
            className="relative cursor-pointer transition hover:text-[#22D3EE] font-semibold "
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Hire Me Button */}
      <Link
        to="contact"
        smooth={true}
        duration={300}
        offset={-100}
        spy={true}
        onSetActive={() => {
          window.history.replaceState(null, "", `contact`);
        }}
        className=" hidden md:block "
      >
        <button className=" text-sm   text-white nav-btn border border-[#22D3EE] rounded-full px-4 py-[6px] hover:bg-[#22D3EE] hover:text-black font-semibold">
          contact me
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden hover:text-[#22D3EE]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            key="mobileMenu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#0d0d2b]   shadow-lg absolute top-12 right-0 mx-auto w-[60%] h-[90vh] rounded-2xl py-6 space-y-2 md:hidden "
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={300}
                offset={-100}
                spy={true}
                onClick={() => setIsOpen(false)}
                onSetActive={() => {
                  window.history.replaceState(
                    null,
                    "",
                    `${item.toLowerCase()}`
                  );
                }}
                activeClass="text-teal-400 bg-teal-500 bg-opacity-10"
                className="block cursor-pointer text-white text-lg px-4 py-2 w-full text-center hover:text-teal-400 hover:bg-teal-500 hover:bg-opacity-10 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={300}
              offset={-100}
              spy={true}
              onClick={() => setIsOpen(false)}
              onSetActive={() => {
                window.history.replaceState(null, "", `contact`);
              }}
              className="px-4 py-2 w-full text-center"
            ><div className="w-full">
              <button className=" text-sm   text-white nav-btn border border-[#22D3EE] rounded-full px-4 py-[6px] hover:bg-[#22D3EE] hover:text-black font-semibold">
                contact me
              </button>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
