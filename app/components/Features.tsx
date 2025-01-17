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
        "Academic excellence is one of our core values at Divine Love Secondary School. Over the years students of Divine Love Secondary School, under the tutelage of qualified and experienced teachers, have carved a niche for themselves in the history of academic excellence in Enugu state and beyond.",
    },
    {
      icon: Ruler,
      title: "Specialty Science",
      description:
        "We have world class facilities such as science and language laboratories, computer and ICT laboratory, well-equipped library, ultra-modern classrooms as well as effectively managed hostels that make learning easier.",
    },
    {
      icon: Clock,
      title: "Revised Curriculum",
      description:
        "Our curriculum is very dynamic. It is constantly revised to keep our students abreast with relevant knowledge they need to excel in an ever changing society.",
    },
    {
      icon: Puzzle,
      title: "Creativity",
      description:
        "We are steadily committed to the continuous improvement in the creativity of our pupils. Our goal is a child centered education, for the realization of maximum self discovery and creativity.",
    },
    {
      icon: FirstAid,
      title: "Health Care",
      description:
        "Here at Divine Love Secondary School, we are dedicated to the physical wellbeing of our staff and students. The School boasts of a health care service that is second to none with a clinic located strategically for easy access in cases of emergencies.",
    },
    {
      icon: Running,
      title: "Sports",
      description:
        "We are dedicated to fostering sporting excellence as we boast of standard sporting facilities some of which include a football pitch, students playing grounds well equipped for the pleasure of our students.",
    },
  ];

  return (
    <div className="bg-secondary px-4 sm:px-6 lg:px-8 py-[90px]">
      <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
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

