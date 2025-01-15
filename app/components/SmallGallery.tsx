import React from 'react'
import Button from './shared/Button';

export default function SmallGallery() {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col gap-[10]">
        <h2 className="text-5xl font-medium text-gray-800 self-center ">
          Image Gallery
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
          <div className="bg-gray-400 h-[200px]" />
        </div>
        <div>
          <Button>VIEW FULL GALLERY</Button>
        </div>
      </div>
    </div>
  );
}
