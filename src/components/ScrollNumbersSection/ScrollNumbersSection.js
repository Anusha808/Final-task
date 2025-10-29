import React, { useEffect, useRef, useState } from "react";
import "./ScrollNumbersSection.css";

const ScrollNumbersSection = () => {
  const sectionRef = useRef(null);
  const starRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );
      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathLength = 4500;
  const dashOffset = pathLength - pathLength * progress;

  return (
    <div className="scroll-numbers-section" ref={sectionRef}>
      {/* 🌀 Curved animated line */}
      <svg
        className="snake-path"
        viewBox="0 0 1000 3000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M200 100 
            Q700 400 400 800
            Q150 1200 700 1600
            Q950 2000 350 2400
            Q150 2700 750 2900
          "
          stroke="black"
          strokeWidth="4"
          strokeDasharray={pathLength}
          strokeDashoffset={dashOffset}
          fill="transparent"
        />
      </svg>

      {/* 🌟 Star at the beginning */}
      <div
        className={`star ${progress > 0.02 && progress < 0.2 ? "visible" : ""}`}
        ref={starRef}
      >
        ★
      </div>

      {/* 🧮 Numbers */}
      <div className={`number number-1 ${progress > 0.05 ? "visible" : ""}`}>
        <h1>1,034</h1>
        <p>Sample Data about Sample Things</p>
      </div>

      <div className={`number number-2 ${progress > 0.3 ? "visible" : ""}`}>
        <h1>2</h1>
        <p>Sample Data about Sample Thing</p>
      </div>

      <div className={`number number-3 ${progress > 0.6 ? "visible" : ""}`}>
        <h1>54</h1>
        <p>Sample Data about Sample Things</p>
      </div>

      <div className={`number number-4 ${progress > 0.85 ? "visible" : ""}`}>
        <h1>25</h1>
        <p>Sample Data about Sample Things</p>
      </div>
    </div>
  );
};

export default ScrollNumbersSection;
