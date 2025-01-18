export const campuses = [
  {
    id: "Abakpa",
    name: "Abakpa Campus",
    slogan: "Where Tradition Meets Innovation",
    description:
      "Our flagship campus located in the heart of downtown. Features state-of-the-art facilities and a vibrant student community.",
    location: "123 Main St, Anytown, USA",
    imageUrl:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737076317/PAT_6949_bybwob.jpg",
    features: [
      "Modern classrooms",
      "Extensive library with over 1 million volumes",
      "State-of-the-art sports complex",
      "Vibrant student center",
    ],
    stats: [
      { label: "Students", value: "500+" },
      { label: "Faculty", value: "50+" },     
      { label: "Year Founded", value: "1992" },
    ],
  },
  {
    id: "emene",
    name: "Emene Campus",
    slogan: "Innovating for Tomorrow",
    description:
      "Dedicated to STEM programs, this campus boasts cutting-edge laboratories and research centers.",
    location: "456 Innovation Ave, Techville, USA",
    imageUrl:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_7061_lafw6j.jpg",
    features: [
      "Advanced research laboratories",
      "Collaborative spaces for interdisciplinary projects",
      "Modern Classrooms",
      "Vibrant Student Center",
    ],
    stats: [
      { label: "Students", value: "500+" },
      { label: "Research Centers", value: "50+" },
      { label: "Year Founded", value: "1992" },
    ],
  },
  {
    id: "Nike",
    name: "Nike Campus",
    slogan: "Cultivating Creativity and Critical Thinking",
    description:
      "A serene setting perfect for humanities and arts programs, featuring galleries, theaters, and expansive green spaces.",
    location: "789 Culture Blvd, Artstown, USA",
    imageUrl:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737086037/Copy_of_PAT_6952_n4wv2k.jpg",
    features: [
      "Modern Classrooms",
      "Extensive Laboratories",
      "State-of-the-art sports complex",
      "Inspiring outdoor spaces for creativity",
    ],
    stats: [
      { label: "Students", value: "500+" },
      { label: "Programs", value: "50+" },
      { label: "Year Founded", value: "1992" },
    ],
  },
];

export type Campus = (typeof campuses)[number];
