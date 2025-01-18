import Link from "next/link";
import { campuses } from "../data/campuses";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="motion-preset-slide-right-md flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737086037/Copy_of_PAT_6952_n4wv2k.jpg"
          alt="School banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container mx-auto absolute inset-0 flex items-center justify-start p-8">
          <h1 className="text-4xl font-bold text-primary">Our Campus</h1>
        </div>
      </div>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campuses.map((campus) => (
              <Link
                key={campus.id}
                href={`/campus/${campus.id}`}
                className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`${campus.imageUrl}`}
                  alt="School banner"
                  className="object-cover"
                  priority
                  width={300}
                  height={200}
                />
                <h2 className="text-2xl font-bold mb-2">{campus.name}</h2>
                <p className="text-muted-foreground mb-4">{campus.slogan}</p>
                <span className="text-primary hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
