import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ImageGallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src=""
          alt="School banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <h1 className="text-4xl font-bold text-gray-500">Image Gallery</h1>
        </div>
        
      </div>

      {/* Gallery Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-lg font-medium text-gray-600">
            Divine Love Secondary
          </h2>
          <h3 className="text-3xl font-bold">Our Gallery</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card
              key={i}
              className={`overflow-hidden ${
                i === 0 ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/placeholder.svg"
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
