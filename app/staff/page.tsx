import React from 'react'
import AdmissionApplication from '../components/AdmissionApplication'
import Image from 'next/image';

export default function page() {
  return (
    <div className="motion-preset-slide-right-md">
      {/* Hero Section */}
      <div className=" relative h-[300px] w-full">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737082974/Copy_of_PAT_6910_kz1dwp.jpg"
          alt="School banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container mx-auto absolute inset-0 flex items-center justify-start p-8">
          <h1 className="text-4xl font-bold text-primary">Staff Login</h1>
        </div>
      </div>

      <AdmissionApplication />
    </div>
  );
}
