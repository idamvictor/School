import Image from "next/image";
import Gallery from "../components/Gallery";



export default function ImageGallery() {
  return (
    <div className="motion-preset-slide-right-md min-h-screen bg-white">
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
      <Gallery />
    </div>
  );
}



