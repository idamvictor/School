import * as React from "react";

export default function Excellence() {
  return (
    <div>
      <ExcellenceSection />
    </div>
  );
}

function ExcellenceSection() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col bg-white">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 mt-4 max-w-full shadow-2xl h-[453px] w-[555px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-gray-800 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              EXCELLENCE IN
              <br />
              CHARACTER & LEARNING
            </div>
            <div className="flex flex-col mt-11 text-base leading-loose max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                DLSS is a co-educational institution that came into existence
              </div>
              <div className="max-md:max-w-full">
                through a divine injunction to foster excellence in character
                and
              </div>
              <div className="max-md:max-w-full">
                learning. A citadel of learning open to students of all ethnic
                origins
              </div>
              <div className="max-md:max-w-full">
                willing to cope with the academic, moral, cultural and other
              </div>
              <div className="max-md:max-w-full">
                positive demands of the school. Hence, the school is aimed at
              </div>
              <div className="max-md:max-w-full">
                inculcating in the students high level of discipline, ethical
                and
              </div>
              <div className="max-md:max-w-full">
                spiritual values that will enable them become desirable members
              </div>
              <div className="max-md:max-w-full">
                of the society as well as future leaders who will be worthy
              </div>
              <div className="max-md:max-w-full">
                instruments to be used by God to around the present generation
              </div>
              <div className="max-md:max-w-full">for good...</div>
            </div>
            <button className="self-start px-14 py-3 mt-11 text-base font-medium leading-10 text-center uppercase bg-white rounded border-2 border-solid border-zinc-200 max-md:px-5 max-md:mt-10">
              learn more about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
