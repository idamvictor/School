import Link from "next/link";
import { School } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <School className="w-16 h-16 text-primary mx-auto mb-4 motion-preset-pulse-md" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-8">
          The teacher login feature is currently under development.
        </p>
        <div className="text-primary hover:text-primary/70 transition-colors">
          <Link href="/">Return to Home Page</Link>
        </div>
      </div>
    </div>
  );
}
