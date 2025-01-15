import React from 'react'
import AdmissionApplication from '../components/AdmissionApplication';

export default function page() {
  return (
    <div>
      <div className="h-[425px] bg-gray-700">
        <div className="container mx-auto">
          <div>
            <h1>Admission Requirements</h1>
            <p>
              Thanks for your interest in getting admitted to Divine Love
              Secondary School. We have made our admission process easy for you.
              Just follow the processes below and we shall happily await for
              your admission into our school.
            </p>
          </div>
        </div>
      </div>
      
      <AdmissionApplication />
    </div>
  );
}
