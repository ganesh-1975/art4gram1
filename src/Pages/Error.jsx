import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router

export default function ErrorPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-260px)] bg-black text-white"
    >
      {/* Error Code */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-6xl font-bold text-red-500"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl text-neutral-300 mt-4"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
