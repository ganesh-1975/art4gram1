import React from "react";
import { motion } from "framer-motion";
import AW1 from "../assets/AW1.png";

export default function AboutWork() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center flex-row-reverse gap-12 mt-28 items-center"
    >
      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-[640px] p-6 bg-neutral-950 rounded-lg shadow-2xl backdrop-blur-md text-justify"
      >
        <h1 className="text-3xl font-bold text-white mb-6">What We Do?</h1>
        <ul className="text-lg text-neutral-300 space-y-4">
          {[
            {
              title: "Creative & design",
              description:
                "We craft stunning logos, unique brand identities, and captivating graphics that make a lasting impression.",
            },
            {
              title: "Video production",
              description:
                "From engaging video edits and dynamic motion graphics to compelling YouTube content, we bring stories to life.",
            },
            {
              title: "Web development",
              description:
                "We build sleek, high-performing, and fully responsive websites that ensure an exceptional user experience.",
            },
            {
              title: "CAD and Technical training",
              description:
                "Our expert-led CAD design sessions and technical training empower professionals to innovate with precision.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="mb-3 cursor-pointer hover:text-white"
            >
              <span className="text-white">{item.title} - </span> {item.description}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl shadow-lg overflow-hidden"
      >
        <img src={AW1} className="h-[480px] w-[380px] object-cover rounded-xl" />
      </motion.div>
    </motion.div>
  );
}
