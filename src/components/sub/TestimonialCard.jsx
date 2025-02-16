import React from "react";

function TestimonialCard({ name, role, feedback, pic }) {
  return (
    <>
      <div className="border border-neutral-400 p-6 shadow-2xl w-[320px] h-fit rounded-2xl">
        <h2 className="text-2xl mb-6">{feedback}</h2>
        <div className="flex gap-2 items-center">
          <img
            src={pic}
            alt=""
            className="rounded-full h-14 w-14 object-cover"
          />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold ">{name}</p>
            <p className="text-xs text-neutral-500 ">{role}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
