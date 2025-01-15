import React from "react";

function AboutSection() {
  return (
    <div className="flex overflow-hidden relative gap-10 justify-center items-start px-32 pt-44 pb-44 min-h-[425px] max-md:px-5 max-md:py-24 bg-black">
      <div className="flex absolute inset-0 z-0 self-start  min-h-[428px] w-[1440px] max-md:max-w-full container mx-auto" />
      <div className="flex z-0 flex-col flex-1 shrink px-4 my-auto w-full basis-0 max-w-[1170px] min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <div className="flex flex-col self-stretch pb-5 my-auto text-5xl font-bold leading-tight text-white max-md:text-4xl">
            <div className="pb-px w-full max-md:text-4xl">About Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;