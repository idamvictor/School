import React from 'react'
import AdmissionApplication from '../components/AdmissionApplication'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      {/* <div className="h-[425px] bg-gray-800">
        <div className="container mx-auto">
          <div>
            <h1>Staff Login</h1>
            <p>
              Thanks for your interest in getting admitted to Mordern Ideal
              college. We have made our admission process easy for you. Just
              follow the processes below and we shall happily await for your
              admission into our school.
            </p>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src=""
                    alt="School banner"
                    fill
                    className="object-cover brightness-50"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-start p-8">
                    <h1 className="text-4xl font-bold text-gray-500">Staff Login</h1>
                  </div>
                </div>

      <AdmissionApplication />
    </div>
  );
}
