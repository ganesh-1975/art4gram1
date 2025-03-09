import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPencilRuler, FaCode, FaBullseye } from "react-icons/fa";

const teamMembers = [
  {
    role: "The Visionary",
    description:
      "The brain behind our innovative ideas, always thinking ahead.",
    icon: <FaLightbulb className="text-yellow-400 text-5xl" />,
  },
  {
    role: "The Creator",
    description: "Transforming concepts into stunning visuals and experiences.",
    icon: <FaPencilRuler className="text-blue-400 text-5xl" />,
  },
  {
    role: "The Problem Solver",
    description: "Ensuring smooth development and execution with expertise.",
    icon: <FaCode className="text-green-400 text-5xl" />,
  },
  {
    role: "The Strategist",
    description: "Planning and optimizing every step for success.",
    icon: <FaBullseye className="text-red-400 text-5xl" />,
  },
];

export default function OurTeam() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center mt-14"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-6">Meet Our Team</h1>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-800/60 p-6 rounded-lg shadow-lg backdrop-blur-md text-center w-[320px]"
          >
            <div className="mb-4 flex justify-center">{member.icon}</div>
            <h3 className="text-xl font-semibold text-white">{member.role}</h3>
            <p className="text-neutral-300 mt-2">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
