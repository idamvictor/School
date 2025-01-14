import React from 'react'

export default function Features() {
  return (
    <div><SchoolFeatures /></div>
  )
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string[];
}


export const schoolFeatures: FeatureCardProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/95e2f4732ee88b0789833e6ed4886d3e3ab5ed12d611ea2c2bf844d36d4a6c54?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    title: "Academic Excellence",
    description: [
      "Academic excellence is one of our core values at",
      "Divine Love Secondary School. Over the years",
      "students of Divine Love Secondary School, under",
      "the tutelage of qualified and experienced",
      "teachers, have carved a niche for themselves in",
      "the history of academic excellence in Enugu",
      "state and beyond.",
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab471127d94ed1f40ed0dbc7e16708516e40173130e39619433f718ef02f02c6?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    title: "Specially Science",
    description: [
      "We have world class facilities such as science",
      "and language laboratories, computer and ICT",
      "laboratory, well-equipped library, ultra-modern",
      "classrooms as well as effectively managed",
      "hostels that make learning easier.",
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/205af5e52f011c44d01b36cb6b234b26ce2605d5b2efcb0423b3a5de1cb2c995?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    title: "Revised Curriculum",
    description: [
      "Our curriculum is very dynamic. It is constantly",
      "revised to keep our students abreast with",
      "relevant knowledge they need to excel in an ever",
      "changing society.",
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a14a2e0768ee154e3d1fbb6ff3a06fe3e5d5481d9d77f28d9baae8286e9db4a3?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    title: "Creativity",
    description: [
      "We are steadily committed to the continuous",
      "improvement in the creativity of our pupils. Our",
      "goal is a child centered education, for the",
      "realization of maximum self discovery and",
      "creativity.",
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86b8f06f42116ceaa3b9f987b2e2c742ba1207165bc661d5e55b9335e7b6f692?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    title: "Health Care",
    description: [
      "Here at Divine Love Secondary School, we are",
      "dedicated to the physical wellbeing of our staff",
      "and students. The School boasts of a health care",
      "service that is second to none with a clinic",
      "located strategically for easy access in cases of",
      "emergencies.",
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b9a165aa9443e12187f72327842b99879a05b7259f11f4c995154e9b00d4d1b?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3",
    title: "Sports",
    description: [
      "We are dedicated to fostering sporting",
      "excellence as we boast of standard sporting",
      "facilities some of which include a football pitch,",
      "students playing grounds well equipped for the",
      "pleasure of our students.",
    ],
  },
];

function SchoolFeatures () {
  return (
    <div className="flex flex-col items-center bg-gray-800 5">
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 w-full">
        {schoolFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};



export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pr-px pb-px text-center min-h-[441px]">
        <div className="flex flex-col items-center px-7 pt-14 pb-12 w-full bg-gray-800 max-md:px-5">
          <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[60px]"
          />
          <div className="mt-6 text-2xl font-bold leading-tight text-white">
            {title}
          </div>
          <div className="mt-6 text-base leading-7 text-neutral-400">

            {description.map((line, index) => (
              <React.Fragment key={index}>
                {line}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};