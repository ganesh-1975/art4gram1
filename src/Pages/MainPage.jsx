import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Social from "../components/Social";
import Testimonials from "../components/Testimonials";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", ""); // Extract the section ID from URL
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Landing />
      <Services />
      <Testimonials />
      <Social />
      <Footer />
    </>
  );
}
