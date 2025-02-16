import React from "react";
import a4g from "../assets/a4g.mp4";
import WordRotate from "@/components/magicui/word-rotate";

function Landing() {
  return (
    <>
      <div className="h-[calc(100vh-116px)] relative">
        <video
          src={a4g}
          muted
          autoPlay
          className="w-full h-full object-cover"
        ></video>
        <div className=" hidden md:block absolute text-center top-3 left-1/2 -translate-x-1/2">
          <div>
            <WordRotate
              className="font-black font-oswald text-2xl md:text-4xl bg-gradient-to-b from-cBlue to-cPurple text-transparent bg-clip-text"
              words={["Graphic Designing", "Video Editing", "Web Developent"]}
              duration={3000}
            />
            <h1 className="text-3xl font-bold">
              Designing the Future, One Pixel at a time
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
