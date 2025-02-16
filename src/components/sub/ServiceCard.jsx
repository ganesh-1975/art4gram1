import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ img, title, desc }) {
  return (
    <>
      <motion.div
        className="p-3 border rounded-xl border-neutral-500 w-[460px] shadow-lg"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <img
          src={img}
          className="rounded-xl mb-4 h-[280px] object-cover w-full"
        />
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-400 my-3">{desc}</p>
      </motion.div>
    </>
  );
}
export default ServiceCard;
