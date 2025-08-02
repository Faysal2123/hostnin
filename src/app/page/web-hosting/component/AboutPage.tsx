// components/DiscountBanner.tsx
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const DiscountBanner: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(26);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(prevDays => {
        if (prevDays <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevDays - 1;
      });
    }, 86400000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="topbar bg-blue-600 text-white py-2 sm:py-3">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <div className="flex-1">
            <div className="text-center sm:text-left">
              <p className="mb-0 text-sm sm:text-base">
                Get 50% Discount Offer <mark className="bg-yellow-400 text-black px-1 sm:px-2 rounded font-semibold">{daysLeft} Days</mark>
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center sm:justify-end gap-4 sm:gap-6">
              <Link href="/login" className="text-sm sm:text-base hover:underline">Login</Link>
              <Link href="/signup" className="text-sm sm:text-base hover:underline">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;