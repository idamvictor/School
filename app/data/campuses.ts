export const campuses = [
  {
    id: "Abakpa",
    name: "Agbakpa Campus",
    slogan: "Where Tradition Meets Innovation",
    description:
      "Our flagship campus located in the heart of downtown. Features state-of-the-art facilities and a vibrant student community.",
    location: "123 Main St, Anytown, USA",
    imageUrl:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737076317/PAT_6949_bybwob.jpg",
    features: [
      "Modern lecture halls and classrooms",
      "Extensive library with over 1 million volumes",
      "State-of-the-art sports complex",
      "Vibrant student center with dining options",
    ],
    stats: [
      { label: "Students", value: "15,000+" },
      { label: "Faculty", value: "1,000+" },
      { label: "Acres", value: "200" },
      { label: "Year Founded", value: "1885" },
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
      "Robotics and AI center",
      "Sustainable energy research facility",
    ],
    stats: [
      { label: "Students", value: "8,000+" },
      { label: "Research Centers", value: "20+" },
      { label: "Acres", value: "150" },
      { label: "Year Founded", value: "1998" },
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
      "World-class performing arts center",
      "Expansive art galleries",
      "Intimate seminar rooms for discussion-based learning",
      "Inspiring outdoor spaces for creativity",
    ],
    stats: [
      { label: "Students", value: "5,000+" },
      { label: "Programs", value: "50+" },
      { label: "Acres", value: "100" },
      { label: "Year Founded", value: "1972" },
    ],
  },
];

export type Campus = (typeof campuses)[number];
