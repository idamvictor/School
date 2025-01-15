import React from "react";

export default function SchoolOverview() {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-around">
          <div className="w-[500px] h-[350px] bg-gray-400" />
          <ExcellenceSection />
        </div>

        {/* ============================== */}
        <div>
          <div className="flex flex-col w-full leading-tight text-center max-md:max-w-full">
            <div className="w-full text-xl font-bold text-amber-300 uppercase px-[559px] max-md:px-5 max-md:max-w-full">
              Mordern Ideal College Enugu
            </div>
            <div className="pb-px mt-7 w-full text-5xl font-medium text-gray-800 px-[623px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              Head of Staff
            </div>
          </div>

          <div className="flex gap-[16px]">
            <LeadershipCard />
            <LeadershipCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export const ExcellenceSection: React.FC = () => {
  return (
    <div className="flex flex-col px-4 font-bold text-gray-800 max-w-[487px] min-h-[1px]">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-xl leading-tight text-amber-300">
          Excellence in Character & Learning
        </div>
        <div className="mt-8 w-full text-5xl leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          We’ve been on the fight against Illiteracy and Ignorance Since 1993
        </div>
      </div>
      <div className="flex flex-col mt-11 text-base leading-loose max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          Mordern Ideal College is noted for her belief in excellence. The
          aspiration of the school management is not less than excellence. Here
          we ensure that nothing short of the best, in academics and high moral
          standard is given to our students. This Philosophy of life has led to
          the increase in the number of our students and maximum productivity
          made manifest in the excellent results of the students in external
          examinations. Our statistics shows that we have more than three
          hundred (300) students in enrolment.
        </div>
      </div>
      <button className="self-start px-14 py-3 mt-11 text-base font-medium leading-10 text-center uppercase bg-white rounded border-2 border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
        learn more about us
      </button>
    </div>
  );
};


function LeadershipCard () {
  return (
    <div className="flex gap-[16px] p-[62px] border border-gray-400">
      <div className="w-[300px] h-[360px] bg-gray-300" />
      <div>
        <div className="font-bold leading-tight text-gray-800 ">
          Rev Sister Margaret Eze
        </div>
        <div className="text-sm whitespace-nowrap text-neutral-400 ">
          Pincipal
        </div>
        <div className="z-10 text-neutral-900 max-md:px-5 max-md:max-w-full">
          A Leader with an unquenchable, desire to help young students, become
          catalysts for world, change.
        </div>
      </div>
    </div>
  );
}
