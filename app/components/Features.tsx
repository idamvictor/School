import {
  Award,
  Ruler,
  Clock,
  Puzzle,
  AmbulanceIcon as FirstAid,
  MonitorIcon as Running,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "At Modern Ideal College , academic excellence stands as a cornerstone of our values. Guided by a team of highly qualified and experienced educators, our students have consistently distinguished themselves, establishing a legacy of unparalleled academic achievement within Enugu State and beyond.",
    },
    {
      icon: Ruler,
      title: "Specialty Science",
      description:
        "Our state-of-the-art facilities include cutting-edge science and language laboratories, a fully equipped computer and ICT lab, a well-stocked library, modern classrooms—all designed to enhance the learning experience.",
    },
    {
      icon: Clock,
      title: "Revised Curriculum",
      description:
        "Our curriculum is highly dynamic and continuously updated to ensure our students stay equipped with the knowledge and skills needed to thrive in an ever-evolving society.",
    },
    {
      icon: Puzzle,
      title: "Creativity",
      description:
        "We are dedicated to fostering continuous growth in our students' creativity. Our goal is to provide child-centered education that promotes self-discovery and maximizes creative potential.",
    },
    {
      icon: FirstAid,
      title: "Health Care",
      description:
        "At Modern Ideal College, we prioritize the physical well-being of our staff and students. Our top-notch healthcare services include a strategically located clinic, ensuring swift access during emergencies.",
    },
    {
      icon: Running,
      title: "Sports",
      description:
        "We are dedicated to fostering sporting excellence as we boast of standard sporting facilities some of which include  student playing grounds well equipped for the pleasure of our students.",
    },
  ];

  return (
    <div className="bg-secondary px-4 sm:px-6 lg:px-8 py-[90px]">
      <h2 className="text-3xl font-bold text-center mb-12 ">
        Our Activities
      </h2>

      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-lg p-5 rounded-lg"
            >
              <div className="mb-4">
                <feature.icon
                  className="w-12 h-12 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

