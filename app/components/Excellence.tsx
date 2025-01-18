import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ExcellenceSection() {
  return (
    <div>
      <div className=" max-w-7xl my-[90px] mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative ">
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
          <div className="space-y-6 ">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              EXCELLENCE IN
              <br />
              CHARACTER & LEARNING
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Since 1992, we have been steadfast in our mission to combat
              illiteracy. At Modern Ideal College, excellence is more than a
              goal—it’s a core belief. The school management aspires to nothing
              less than the highest standards, ensuring our students receive
              unparalleled academic instruction and are instilled with strong
              moral values.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              This unwavering philosophy has driven our growth, with increasing
              student enrollment and outstanding productivity even in
              challenging times. Our students consistently excel in external
              examinations, a testament to our commitment to excellence.
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
