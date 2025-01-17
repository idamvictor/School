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
              DLSS is a co-educational institution that came into existence
              through a Ideal injunction to foster excellence in character and
              learning. A citadel of learning open to students of all ethnic
              origins willing to cope with the academic, moral, cultural and
              other positive demands of the school. Hence, the school is aimed
              at inculcating in the students high level of discipline, ethical
              and spiritual values that will enable them become desirable
              members of the society as well as future leaders who will be
              worthy instruments to be used by God to around the present
              generation for good...
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
