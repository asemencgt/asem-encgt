'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader once the window's `load` event fires
    window.addEventListener('load', () => {
      setLoading(false);
    });

    // Fallback: hide preloader after a few seconds even if some assets fail to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setLoading(false));
    };
  }, []);

  if (!loading) {
    return null; // Don't render anything once loading is complete
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div className="text-center">
        <Image 
          src="/images/asem-logo.png" 
          alt="ASEM Logo" 
          width={100} 
          height={100} 
          className="animate-pulse mb-4" 
        />
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;