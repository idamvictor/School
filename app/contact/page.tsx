"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HomeIcon, PhoneIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export default function Contact() {
 
  return (
    <div className="motion-preset-slide-right-md relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 ">
        {/* Hero Section */}
        <div className="relative h-[300px] w-full">
          <Image
            src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737084261/Copy_of_PAT_6913_klxfdj.jpg"
            alt="School banner"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute container mx-auto inset-0 flex items-center justify-start p-8">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="bg-white">
          <div className=" grid md:grid-cols-2 gap-12 container mx-auto py-[100px]">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-8 text-black">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <Textarea
                  placeholder="Enter Message"
                  className="min-h-[200px] bg-white/95"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white/95"
                  />
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="bg-white/95"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Enter Subject"
                  className="bg-white/95"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/70 text-primary-foreground px-8"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <HomeIcon className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-black font-semibold mb-2">
                    Permanent Location.
                  </h3>
                  <p className="text-black/80">
                    Modern Ideal College, 54/56 Jim Nwobodo Avenue Trans Ekulu
                    Enugu, Enugu State..
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-black font-semibold mb-2">
                    +2348187095150
                  </h3>
                  <p className="text-black/80">Mon to Fri 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MailIcon className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-black font-semibold mb-2">
                    info@modernidealcollegel.com
                  </h3>
                  <p className="text-black/80">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
