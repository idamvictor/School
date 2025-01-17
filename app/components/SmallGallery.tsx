import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Gallery from "../components/Gallery";

export default function GallerySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Gallery Section */}
      <div className="space-y-8">

        <Gallery />

        <div className="text-center">
          <Link href="/gallery">
            <Button
              variant="secondary"
              className="bg-primary text-primary-foreground hover:bg-primary/80"
            >
              VIEW FULL GALLERY
            </Button>
          </Link>
        </div>
      </div>

      {/* Admission CTA Section */}
      <div className="bg-secondary rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
          <p className="text-primary font-medium">
            OUR ADMISSION PROCESS IS VERY EASY!
          </p>
          <h2 className="text-3xl font-bold">Why don&apos;t you join us?</h2>
        </div>
        <Link href="/contact">
          <Button className="bg-primary text-primary-foreground hover:primary/80">
            ADMISSION!!
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
