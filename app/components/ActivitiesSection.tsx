import Image from "next/image";

export default function ActivitiesSection() {
  const activities = [
    {
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737081397/PAT_7057_qlxll1.jpg",
      title: "Chemistry Practicals",
      description:
        "A snapshot of the students diligently at work during a chemistry practical. Divine love boast of a highly and well equipped laboratory for students to carry out experiments.",
    },
    {
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737081395/PAT_6930_gyf4mq.jpg",
      title: "Students in the ICT Lab",
      description:
        "We also have an ICT lab with state of the art computers and gadgets to help students learn faster. Each student is assigned to an individual computer with a well trained instructor to guide them.",
    },
    {
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737081402/PAT_6886_djrfrm.jpg",
      title: "Students during an Exam",
      description:
        "Exams are conducted at the end of each session with emphasis on providing a conducive and exam malpractice free environment. Efforts are made to ensure excellent performance.",
    },
  ];

  const classPhotos = [
    {
      class: "SS1",
      position: "left",
      src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_7061_lafw6j.jpg",
    },
    {
      class: "SS2",
      position: "center",
      src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082976/Copy_of_PAT_6897_g3klkm.jpg",
    },
    {
      class: "SS3",
      position: "right",
      src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_6910_wmt3w6.jpg",
    },
    {
      class: "SS1",
      position: "left",
      src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_6945_emupxb.jpg",
    },
    {
      class: "SS2",
      position: "center",
      src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082976/Copy_of_PAT_6913_qcmxic.jpg",
    },
    {
      class: "SS3",
      position: "right",
      src: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082976/Copy_of_PAT_6925_dkiv3y.jpg",
    },
  ];


  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>

        {/* Academic Activities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Class Photos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {classPhotos.map((photo, index) => (
            <div key={index} className="relative h-64 group overflow-hidden">
              <div className="absolute inset-0 bg-yellow-400 w-12 z-10 flex flex-col items-center justify-center text-white">
                {/* <span className="writing-mode-vertical text-sm font-bold">
                  STUDENTS
                </span>
                <span className="writing-mode-vertical rotate-180 text-sm font-bold mt-2">
                  {photo.class}
                </span> */}
              </div>
              <Image
                src={`${photo.src}`}
                alt={`Class ${photo.class} Photo`}
                fill
                className="object-cover object-center ml-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// // Add custom CSS for vertical text
// const styles = `
//   .writing-mode-vertical {
//     writing-mode: vertical-rl;
//     text-orientation: mixed;
//     transform: rotate(180deg);
//   }
// `;

