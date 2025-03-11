import React from "react";
import TestimonialCard from "./sub/TestimonialCard";

function Testimonials() {
  let items = [
    {
      name: "Aurora",
      rating: 1,
      role: "Software Engineer",
      feedback:
        "Great experience! The product exceeded my expectations and the customer support was fantastic.",
      picture:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      name: "Priya Verma",
      rating: 2,
      role: "Digital Marketer",
      feedback:
        "Very user-friendly and well-designed. Helped me streamline my marketing campaigns effortlessly.",
      picture:
        "https://media.istockphoto.com/id/1180926773/photo/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-arms.webp?a=1&b=1&s=612x612&w=0&k=20&c=cinmPjbkyRi8OCmGmoNYnywF7fnVB6pVi00Oi0flIx0=",
    },

    {
      name: "Sara Khan",
      rating: 3,
      role: "Graphic Designer",
      feedback:
        "Loved the UI/UX design! Very intuitive and easy to use. Would highly recommend it to my peers.",
      picture:
        "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Vikram Reddy",
      rating: 5,
      role: "Financial Analyst",
      feedback:
        "A well-thought-out solution that helped me analyze data more efficiently. Great value for money!",
      picture:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <>
      <div className="p-8" id="clients">
        <h1 className="font-black text-4xl text-center mb-10">
          Trusted by our <span className="font-medium italic">clients</span>
        </h1>
        <div className="flex md:justify-center lg:justify-between justify-center items-center flex-wrap gap-4">
          {items.map((item) => (
            <TestimonialCard
              name={item.name}
              role={item.role}
              feedback={item.feedback}
              pic={item.picture}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
