import Navbar from "@/components/Navbar";
import AboutTeam from "@/components/AboutTeam";
import Header from "@/components/Header";
import React from "react";
import AboutWork from "@/components/AboutWork";
import OurTeam from "@/components/OurTeam";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Header />
      <AboutTeam />
      <AboutWork />
      <OurTeam />
      <Footer />
    </>
  );
}

export default AboutUs;
