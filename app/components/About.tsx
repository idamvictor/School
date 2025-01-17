import Image from "next/image";
import React from "react";

function AboutSection() {
  return (
    <div className="relative h-[300px] w-full intersect:motion-preset-slide-right-lg intersect:motion-delay-500">
      <Image
        src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737076317/PAT_6949_bybwob.jpg"
        alt="School banner"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-start p-8">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
      </div>
    </div>
  );
}

export default AboutSection;