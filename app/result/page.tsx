import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="motion-preset-slide-right-md min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737081395/PAT_6930_gyf4mq.jpg"
          alt="School banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute container mx-auto inset-0 flex items-center justify-start p-8">
          <h1 className="text-4xl font-bold text-white">Check Result</h1>
        </div>
      </div>

      <main className="text-center mt-[90px]">
        <GraduationCap className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-primary mb-4">
          Student Results Portal
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Access your academic performance with just one click. View your latest
          grades and progress reports instantly.
        </p>
        <Link href="/check-results">
          <Button size="lg" className="text-lg px-8 py-6">
            Check Your Results
          </Button>
        </Link>
      </main>
    </div>
  );
}

