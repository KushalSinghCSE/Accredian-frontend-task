import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center px-4">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Refer & Earn 🎉
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        className="text-lg mb-6 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Invite your friends and earn exciting rewards! Share your referral and get rewarded instantly.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Refer Now
      </motion.button>

      {/* Show Modal only if isOpen is true */}
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Hero;
