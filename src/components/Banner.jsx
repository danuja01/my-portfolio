import { useState, useEffect } from "react";
import { TiWarningOutline } from "react-icons/ti";

const Banner = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const message = (
    <span className="mr-10">
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

  // Inline CSS object for styling
  const styles = {
    bannerContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      overflow: "hidden",
      position: "relative",
    },
    messageWrapper: {
      display: "flex",
      gap: "1rem", // Adds space between content
    },
    mobileMarquee: {
      display: "flex",
      animation: "scrollingMessage 35s linear infinite", // Unique animation name
      whiteSpace: "nowrap",
    },
    mobileMessage: {
      display: "inline-flex",
      gap: "2rem", // To give space between repeated content
    },
    desktopMessage: {
      whiteSpace: "nowrap",
      fontSize: "1rem",
    },
  };

  return (
    <div className="banner">
      <div style={styles.bannerContainer}>
        {isMobileView ? (
          <div style={styles.mobileMarquee}>
            <div style={styles.mobileMessage}>{message}</div>
            <div style={styles.mobileMessage}>{message}</div>
          </div>
        ) : (
          <div style={styles.desktopMessage}>{message}</div>
        )}
      </div>
    </div>
  );
};

export default Banner;
