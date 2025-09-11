import { useEffect, useState } from 'react';
import Image from 'next/image';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the window is fully loaded
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        setLoading(false);
      });
    }

    // Set a fallback timer in case the 'load' event doesn't fire as expected,
    // or if you want to ensure it disappears after a maximum time.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out">
          <div className="text-center">
            <Image 
              src="/images/asem-logo.png" 
              alt="ASEM Logo" 
              width={100} 
              height={100} 
              className="animate-pulse mb-4" 
            />
            <p className="text-xl text-gray-700">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;