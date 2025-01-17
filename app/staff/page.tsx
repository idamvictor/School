import React from 'react'
import AdmissionApplication from '../components/AdmissionApplication'
import Image from 'next/image';

export default function page() {
  return (
    <div className="motion-preset-slide-right-md">
      {/* Hero Section */}
      <div className=" relative h-[300px] w-full">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737083489/Copy_of_PAT_6999_bqqewe.jpg"
          alt="School banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <h1 className="text-4xl font-bold text-white">Staff Login</h1>
        </div>
      </div>

      <AdmissionApplication />
    </div>
  );
}
