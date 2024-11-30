import { useState, useEffect } from "react";
import { TiWarningOutline } from "react-icons/ti";

const Banner = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const message = (
    <span>
      🚨 Some content here might be outdated. For the latest information,
      <span className="font-semibold text-blue-600"> contact me at </span>
      <a
        href="mailto:todanuja01@gmail.com"
        className="font-semibold text-blue-500"
      >
        todanuja01@gmail.com
      </a>
      <span className="font-semibold text-blue-600"> or </span>
      <a href="tel:+94764510860" className="font-semibold text-blue-500">
        +94 76 451 0860
      </a>
      .<span className="ml-2">Thank you!</span>
    </span>
  );

  // Check screen width on resize
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 1000); // Below 1000px to apply marquee
    };

    checkScreenWidth(); // Initial check
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div className="banner">
      <div className="flex items-center justify-center w-full">
        {isMobileView ? (
          <marquee className="text-sm md:text-base font-medium text-[#090e34]">
            {message}
          </marquee>
        ) : (
          <div className="text-sm md:text-base font-medium text-[#090e34] whitespace-nowrap">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
