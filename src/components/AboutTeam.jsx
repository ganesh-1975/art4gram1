import React from "react";
import { motion } from "framer-motion";
import AT2 from "../assets/AT2.jpg";

export default function AboutTeam() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center gap-12 mt-14 items-center"
    >
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-[640px] p-6 bg-neutral-950 rounded-lg shadow-2xl text-justify backdrop-blur-md"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Who Are We?</h1>
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-neutral-300 mb-3 cursor-pointer"
        >
          We believe in pushing creative boundaries and delivering impact-driven
          designs. From eye-catching graphics and immersive UI/UX experiences to
          engaging videos and seamless websites, we bring ideas to life with
          precision and passion.
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-neutral-300 mb-3 cursor-pointer"
        >
          At our core, we are storytellers, weaving compelling narratives
          through visuals, motion, and interactive design. Whether it's crafting
          a striking brand identity, developing intuitive digital solutions, or
          producing captivating content, we blend innovation with strategy to
          make a lasting impression.
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-neutral-300 cursor-pointer"
        >
          With a keen eye for detail and a commitment to excellence, we turn
          visions into reality, ensuring every project not only meets but
          exceeds expectations. Let's create something extraordinary together.
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl shadow-lg overflow-hidden"
      >
        <img
          src={AT2}
          className="h-[460px] w-[380px] object-cover rounded-xl"
          alt="Team Image"
        />
      </motion.div>
    </motion.div>
  );
}
