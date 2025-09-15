import React from "react";
import Model from "public/model.png";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Model}
          alt="This is model Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/70 to-transparent" />
      </div>

      {/* Hero text */}
      <div className="flex items-center justify-center h-full">
        <h1 className="font-bold text-5xl text-white drop-shadow-lg">
          This model 2025
        </h1>
      </div>
    </div>
  );
};

export default HeroPage;
