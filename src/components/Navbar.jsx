import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname === "/") {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <div className=" hidden md:flex justify-between items-center py-2 px-4 ">
        <img src={logo} alt="LOGO" height="100" width="100" />
        <ul className="flex gap-6 text-lg">
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleScroll("services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleScroll("clients")}>
              {" "}
              Our Clients
            </Link>
          </li>
        </ul>
        <motion.div
          className="bg-white text-black px-4 py-2 rounded-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <a href="https://wa.me/919499003946?text=Hi there!" target="_blank">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Navbar;
