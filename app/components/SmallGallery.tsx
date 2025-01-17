import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
// import { Gallery } from "../gallery/page";

export default function GallerySection() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Gallery Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Image Gallery</h2>

        {/* <Gallery /> */}

        <div className="text-center">
          <Link href="/gallery">
            <Button
              variant="secondary"
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              VIEW FULL GALLERY
            </Button>
          </Link>
        </div>
      </div>

      {/* Admission CTA Section */}
      <div className="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
          <p className="text-yellow-500 font-medium">
            OUR ADMISSION PROCESS IS VERY EASY!
          </p>
          <h2 className="text-3xl font-bold">Why don&apos;t you join us?</h2>
        </div>
        <Link href="/contact">
          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            ADMISSION!!
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
