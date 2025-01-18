import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ExcellenceSection() {
  return (
    <div>
      <div className=" max-w-7xl my-[90px] mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative intersect:motion-preset-slide-right-lg intersect:motion-delay-500">
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737080719/PAT_7034_ijzrjv.jpg"
                alt="School Excellence"
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 intersect:motion-preset-slide-left-lg intersect:motion-delay-500">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              EXCELLENCE IN
              <br />
              CHARACTER & LEARNING
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Modern Ideal College is a premier educational institution located
              in Enugu State, Nigeria, dedicated to fostering academic
              excellence, innovation, and character development. We aim to
              provide a world-class education that empowers students to excel in
              their studies while instilling strong moral values to prepare them
              for success in both their personal and professional lives.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At Modern Ideal College, we offer a comprehensive curriculum that
              blends modern educational practices with traditional values,
              ensuring that students receive a well-rounded education. Our
              highly qualified and experienced teachers are committed to
              delivering quality instruction, utilizing state-of-the-art
              resources and teaching methodologies that cater to the individual
              needs of each student.
            </p>

            <Button
              variant="outline"
              className="font-medium mt-4 sm:mt-0 bg-primary text-primary-foreground hover:bg-white hover:text-primary/50"
            >
              LEARN MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
