import React from 'react'

export default function ActivitiesSection() {
  return (
    <div><Activities /></div>
  )
}


const activities = [
  {
    title: "Chemistry Practicals",
    description: [
      "A snapshot of the students diligently at",
      "work during a chemistry practical. Modern Ideal",
      "College boast of a highly and well equppied",
      "laboratory for students to carry out",
      "experiments",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bf9945dfd5818444190c06675fc4bbcaea45f4bf16efa43840d0d0b7b7b0303d?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
  },
  {
    title: "Students in the ICT Lab",
    description: [
      "We also have an ICT lab with state of the art",
      "computers and gadgets to help students",
      "learn faster. Each student is assigned to an",
      "dindvidual computer with a well trained",
      "instructor to guide them.",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/86134bacfb1b840ae20e85254613370bd7d578dc900cd27d0666376a13374817?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
  },
  {
    title: "Students during an Exam",
    description: [
      "Exams are conducted at the end of each",
      "session with emphasis on providng a",
      "conducive and exam malpractice free",
      "environment. Efforts are made to ensure",
      "excellent performance.",
    ],
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3f8feda9273b80db807107a73d5e44dda2e4f74171587206a4efe172bd8e7c65?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
  },
];

const classGroups = [
  {
    class: "SS1",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/03b7bb01402148c7d08253a8a9e64e333d4c564664c0764fdcb82f019782553e?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ae3da292d06813e0494a63863933dbbc7b78b0fb222beeb2c4c37a968d741cc9?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    ],
  },
  {
    class: "SS2",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7012764f343b06a72c27451fe8ce6268c4be9f1d5f03b528e10caf52304d0e47?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e7b6eabe55668bc9a298a80ce414d386263662799b43cecfb2e5f6db8012f810?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    ],
  },
  {
    class: "SS3",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/788f7dc1b8f464dd7935119b114483880e5bb678774c382c42899645ec1e5322?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/933b87d23aa7d41a2cd864cc9b88040ed2168704a4d952db793366cff560e2c9?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    ],
  },
];

export function Activities() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-medium leading-tight text-center text-gray-800 max-md:text-4xl">
        Our Activities
      </div>
      <div className="mt-24 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {classGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow px-4 text-base font-semibold text-gray-800 uppercase h-[500px] min-h-[1px]">
                <StudentClassCard
                  class={group.class}
                  imageSrc={group.images[0]}
                  position="left"
                />
                <div className="mt-5">
                  <StudentClassCard
                    class={group.class}
                    imageSrc={group.images[1]}
                    position="right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export interface ActivityCardProps {
  title: string;
  description: string[];
  imageSrc: string;
}

export interface StudentClassCardProps {
  class: string;
  imageSrc: string;
  position: "left" | "right";
}


export function StudentClassCard({
  class: className,
  imageSrc,
  position,
}: StudentClassCardProps) {
  return (
    <div className="flex flex-col justify-center p-px w-full border border-solid border-zinc-200">
      <div className="flex overflow-hidden relative flex-col justify-center w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`Students in ${className}`}
          className="object-contain z-0 w-full aspect-[1.5] max-w-[358px]"
        />
        <div
          className={`flex absolute bottom-0 ${
            position === "left"
              ? "left-0 right-[305px]"
              : "-right-px left-[306px]"
          } z-0 gap-${
            position === "left" ? "3.5" : "7"
          } items-start pt-3 pl-3 bg-amber-300 h-[358px] min-h-[358px] rotate-[-1.5707963267948966rad] w-[53px]`}
        >
          {position === "left" ? (
            <div className="flex gap-3.5 items-start h-full">
              <div className="leading-6">Students in</div>
              <div className="leading-relaxed">|</div>
            </div>
          ) : (
            <div className="leading-6">Students in</div>
          )}
          <div
            className={`leading-${
              position === "left" ? "6" : "relaxed"
            } whitespace-nowrap`}
          >
            {className}
          </div>
        </div>
      </div>
    </div>
  );
}



export function ActivityCard({
  title,
  description,
  imageSrc,
}: ActivityCardProps) {
  return (
    <div className="flex flex-col grow pt-px pb-12 border border-solid border-zinc-200 max-md:mt-8">
      <div className="flex overflow-hidden relative flex-col justify-center w-full text-base font-semibold leading-relaxed text-gray-800 uppercase whitespace-nowrap">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-contain z-0 w-full aspect-[1.33] max-w-[358px]"
        />
        <div className="flex absolute bottom-0 left-0 z-0 items-start pt-3 pl-3 bg-amber-300 h-[358px] min-h-[358px] right-[305px] rotate-[-1.5707963267948966rad] w-[53px]">
          <div>|</div>
        </div>
      </div>
      <div className="flex flex-col items-start px-8 mt-8 text-base text-neutral-400 max-md:px-5">
        <div className="self-stretch px-14 text-2xl font-bold leading-none text-center text-gray-800 max-md:px-5">
          {title}
        </div>
        {description.map((text, index) => (
          <div key={index} className={`${index > 0 ? "mt-2.5" : "mt-5"}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}