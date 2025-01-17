import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ExcellenceSection() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="relative rounded-lg shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="School Excellence"
              width={400}
              height={400}
              className="rounded-lg"
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-4 right-4 bg-gray-900 text-yellow-400 p-4 rounded-lg">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-lg -z-10" />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            EXCELLENCE IN
            <br />
            CHARACTER & LEARNING
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            DLSS is a co-educational institution that came into existence
            through a Ideal injunction to foster excellence in character and
            learning. A citadel of learning open to students of all ethnic
            origins willing to cope with the academic, moral, cultural and other
            positive demands of the school. Hence, the school is aimed at
            inculcating in the students high level of discipline, ethical and
            spiritual values that will enable them become desirable members of
            the society as well as future leaders who will be worthy instruments
            to be used by God to around the present generation for good...
          </p>

          <Button variant="outline" className="font-medium mt-4 sm:mt-0">
            LEARN MORE ABOUT US
          </Button>
        </div>
      </div>
    </div>
  );
}
