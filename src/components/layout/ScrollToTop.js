import React, { useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div>
      {/* go to top button */}
      <button
        class="go-to-top"
        onClick={scrollToTop}
        style={{ display: isVisible ? "inline" : "none" }}
      >
        top
      </button>
    </div>
  );
};
