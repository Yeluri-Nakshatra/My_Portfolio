import React from "react";
import { useState } from "react";
import { Element } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "../../assets/aboutme.json";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  // inside the component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://my-portfolio-xwy0.onrender.com/api/contact",
        formData
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <Element
      name="contact"
      className="min-h-screen md:mt-20 text-white md:mx-10 mx-8 flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[40px] text-[#22D3EE] font-bold"
      >
        Contact
      </motion.div>

      <div className="flex flex-row gap-40 py-14 justify-center items-center w-full">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -160 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[40%] w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full bg-[#0e0e2e] p-6 rounded-2xl shadow-md"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 text-md font-semibold text-white">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-[#161636] placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-[#22D3EE] border border-[#22D3EE]/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-md font-semibold text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#161636] placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-[#22D3EE] border border-[#22D3EE]/30"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-md font-semibold text-white">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Let me know how I can help you..."
                className="w-full px-4 py-3 rounded-lg bg-[#161636] placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-[#22D3EE] border border-[#22D3EE]/30 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="w-full text-right">
              <button
                type="submit"
                disabled={loading}
                className={`px-4 font-semibold py-2 nav-btn mt-4 rounded-lg border transition-all ${
                  loading
                    ? "bg-[#22D3EE] text-black cursor-not-allowed opacity-60"
                    : "bg-[#161636] text-white border-[#22D3EE] hover:bg-[#22D3EE] hover:text-black"
                }`}
              >
                {loading ? "Sending . . . . ." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Lottie + Blobs */}
        <motion.div
          initial={{ opacity: 0, x: 160 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative md:block hidden  w-[300px] h-[300px]"
        >
          {/* Blobs Background */}

          <div className="w-48 h-48 border absolute -top-8 left-0 rounded-full bg-[#22D3EE] opacity-60 mix-blend-lighten filter blur-3xl custom-blob delay-0" />
          <div className="w-48 h-48 absolute top-0 -right-6 rounded-full bg-[#9333EA] opacity-60 mix-blend-lighten filter blur-3xl custom-blob delay-2" />
          <div className="w-48 h-48 absolute bottom-0 left-1/4 rounded-full bg-[#3B82F6] opacity-60 mix-blend-lighten filter blur-3xl custom-blob delay-4" />

          {/* Lottie Animation */}
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300 }}
            className="opacity-80"
          />
        </motion.div>
      </div>
    </Element>
  );
};

export default Contact;
