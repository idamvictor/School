import React from "react";
import About from "../components/About";
import SchoolOverview from "../components/SchoolOverview";
import Identity from "../components/Identity";
import SmallGallery from "../components/SmallGallery";

export default function page() {
  return (
    <div className="motion-preset-slide-right-md" >
      <About />
      <SchoolOverview />
      <Identity />
      <SmallGallery />
    </div>
  );
}