"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HomeIcon, PhoneIcon, MailIcon } from "lucide-react";

export default function Contact() {
 
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="flex justify-end mb-8">
          <div className="bg-yellow-400 px-6 py-2 text-black font-medium">
            <span>HOME</span>
            <span className="mx-2">→</span>
            <span>CONTACT</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-white text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            If you are looking to have a conversation with us with regards to
            one thing or the other; do not hesitate to send a message to us.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-semibold mb-8 text-black">
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
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-8"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <HomeIcon className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-black font-semibold mb-2">
                  Permanent Location.
                </h3>
                <p className="text-black/80">
                  Modern Ideal College, 54/56 Jim Nwobodo Avenue Trans
                  Ekulu Enugu, Enugu State..
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-black font-semibold mb-2">
                  +2348187095150
                </h3>
                <p className="text-black/80">Mon to Fri 8am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MailIcon className="w-6 h-6 text-yellow-400 mt-1" />
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
  );
}
