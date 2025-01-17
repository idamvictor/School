import Image from "next/image";
import { Card } from "@/components/ui/card";

const galleryPhotos = [
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_7061_lafw6j.jpg",
    alt: "Photo 1",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737083489/Copy_of_PAT_6999_bqqewe.jpg",
    alt: "Photo 2",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082976/Copy_of_PAT_6897_g3klkm.jpg",
    alt: "Photo 3",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_6910_wmt3w6.jpg",
    alt: "Photo 4",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082978/Copy_of_PAT_6945_emupxb.jpg",
    alt: "Photo 5",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737081397/PAT_7057_qlxll1.jpg",
    alt: "Photo 6",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082975/Copy_of_PAT_7061_gt0isb.jpg",
    alt: "Photo 7",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082974/Copy_of_PAT_6897_avbiql.jpg",
    alt: "Photo 8",
  },
  {
    url: "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737081402/PAT_6886_djrfrm.jpg",
    alt: "Photo 9",
  },
  // Add more photos as needed
];

export default function ImageGallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737084261/Copy_of_PAT_6913_klxfdj.jpg"
          alt="School banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <h1 className="text-4xl font-bold text-white">Image Gallery</h1>
        </div>
      </div>

      {/* Gallery Section */}
      {/* <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-lg font-medium text-gray-600">
            Modern Ideal College
          </h2>
          <h3 className="text-3xl font-bold">Our Gallery</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryPhotos.map((photo, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={photo.url}
                alt={photo.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </Card>
          ))}
        </div>
      </div> */}
      <Gallery />
    </div>
  );
}


export function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium text-gray-600">
          Modern Ideal College
        </h2>
        <h3 className="text-3xl font-bold">Our Gallery</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryPhotos.map((photo, index) => (
          <Card key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={photo.url}
              alt={photo.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
