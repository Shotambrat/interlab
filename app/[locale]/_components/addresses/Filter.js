"use client";
import { useState, useEffect } from "react";
import arrowDown from "@/public/svg/arrow-down-red.svg";
import Image from "next/image";
import ForPage from "./ForPage"

export default function Filter({ clinicsLocations, sortedClinics , activeClinic}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3); // Default for mobile

  const toggleReviews = () => {
    setIsExpanded(!isExpanded);
  };

  // Adjust the number of reviews based on the screen size
  const adjustVisibleReviews = () => {
    if (window.innerWidth >= 1100) {
      setVisibleReviewsCount(9); // Desktop
    } else if (window.innerWidth >= 650) {
      setVisibleReviewsCount(6); // Tablet
    } else {
      setVisibleReviewsCount(3); // Mobile
    }
  };

  // Use effect to adjust visible reviews on window resize
  useEffect(() => {
    adjustVisibleReviews(); // Adjust initially
    window.addEventListener("resize", adjustVisibleReviews); // Adjust on resize

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustVisibleReviews);
    };
  }, []);


  return (
    <div className="mt-12 relative w-full max-w-[1440px] mx-auto px-2">
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedClinics.length === 0
          ? clinicsLocations.slice(0, isExpanded ? clinicsLocations.length : visibleReviewsCount).map((clinic, index) => (
              <ForPage
                key={index}
                title={clinic.name}
                address={clinic.address}
                graphic={[clinic.graphic]}
                tel={clinic.tel}
                url="/"
                className={clinic.id === activeClinic ? "bg-red-100" : ""}
              />
            ))
          : sortedClinics.slice(0, isExpanded ? sortedClinics.length : visibleReviewsCount).map((clinic, index) => (
              <ForPage
                key={index}
                title={clinic.name}
                address={clinic.address}
                graphic={[clinic.graphic]}
                tel={clinic.tel}
                url="/"
                className={clinic.id === activeClinic ? "bg-red-100" : ""}
              />
            ))}
      </div>
      <div className="text-center mt-8 flex items-center w-full justify-center">
            <button
              onClick={toggleReviews}
              className="px-6 py-3 text-red-400 items-center font-semibold text-xl flex gap-2"
            >
              {isExpanded ? "Свернуть" : "Показать все"}
              <Image 
                src={arrowDown}
                width={100}
                height={100}
                alt="Down red arrow"
                className={`w-4 ${isExpanded && 'rotate-180'} transition-all duration-150`}
              />
            </button>
          </div>
    </div>
  );
}
