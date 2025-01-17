// import React from 'react'
// import AdmissionApplication from '../components/AdmissionApplication';
// import Image from 'next/image';

// export default function page() {
//   return (
//     <div>
//       <div className="h-[425px] bg-gray-700">
//         <div className="container mx-auto">
//           <div>
//             <h1>Admission Requirements</h1>
//             <p>
//               Thanks for your interest in getting admitted to Modern Ideal college Enugu. We have made our admission process easy for you.
//               Just follow the processes below and we shall happily await for
//               your admission into our school.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//             {/* <div className="relative h-[300px] w-full">
//               <Image
//                 src=""
//                 alt="School banner"
//                 fill
//                 className="object-cover brightness-50"
//                 priority
//               />
//               <div className="absolute inset-0 flex items-center justify-start p-8">
//                 <h1 className="text-4xl font-bold text-gray-500">Image Gallery</h1>
//               </div>
              
//             </div> */}

//       <AdmissionApplication />

      
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4">
      <main className="text-center">
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
      <footer className="mt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Student Results Portal. All rights
        reserved.
      </footer>
    </div>
  );
}

