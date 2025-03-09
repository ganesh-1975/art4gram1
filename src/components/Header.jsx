import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-[75%] md:w-[680px] mx-auto my-5">
        <h1 className="mb-5 text-center font-black font-oswald text-2xl md:text-4xl bg-gradient-to-b from-cBlue to-cPurple text-transparent bg-clip-text">
          We Design We Create We Innovate
        </h1>
        <p className="text-justify text-lg text-neutral-300">
          Welcome to{" "}
          <span className="text-xl bg-gradient-to-b from-cBlue to-cPurple text-transparent bg-clip-text">
            Art4Gram
          </span>
          , where creativity meets technology! We are a team of passionate
          designers, developers, content creators dedicated to craft visually
          stunning, user-friendly and engaging digital experiences.
        </p>
      </div>
    </>
  );
}
