import React from "react";
import { Star } from "lucide-react";

function TestimonialCard({ name, role, feedback, pic, rating }) {
  return (
    <>
      <div className="border border-neutral-400 p-6 shadow-2xl w-[320px] h-fit rounded-2xl">
        <h2 className="text-2xl mb-6">{feedback}</h2>
        <div className="flex"></div>
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
        
        <div className="flex mt-2 ml-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating
                  ? "fill-yellow-500 text-yellow-500"
                  : "text-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
