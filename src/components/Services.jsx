import React from "react";
import ServiceCard from "./sub/ServiceCard";

function Services() {
  let items = [
    {
      img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Website Designing",
      desc: "Your website is the digital face of your brand, and we make sure it stands out. Whether you need a personal blog, business website, or an e-commerce store, we design and develop user-friendly, responsive, and high-performance websites that engage and convert visitors.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww",
      title: "Video Editing",
      desc: "Transform your raw footage into compelling visuals that leave a lasting impression. From promotional videos to social media content, we bring your vision to life with professional video editing services that captivate your audience.",
    },
    {
      img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhcGhpYyUyMGRlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Graphic Designing",
      desc: "Make your brand visually unforgettable with eye-catching designs that speak volumes. Our graphic design services help businesses communicate their message effectively through stunning visuals.",
    },
  ];
  return (
    <>
      <div className="p-8" id="services">
        <h1 className="font-medium italic text-4xl text-center mb-10">
          Our Digital Services
        </h1>
        <div className="flex justify-center md:justify-between flex-wrap gap-4">
          {items.map((item) => (
            <ServiceCard img={item.img} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
