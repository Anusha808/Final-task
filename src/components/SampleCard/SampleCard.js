import React, { useEffect, useState, useRef } from "react";
import "./SampleCard.css";

const SampleCards = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress (0 → 1)
      const rawProgress =
        (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌈 Dynamic gradient animation while scrolling
  const gradientShift = progress * 50;
  const background = `linear-gradient(
    to bottom,
    rgba(255, 182, 193, 1) ${0 + gradientShift}%,
    rgba(255, 255, 255, 1) ${25 + gradientShift}%,
    rgba(255, 182, 193, 1) ${50 + gradientShift}%,
    rgba(255, 255, 255, 1) ${75 + gradientShift}%,
    rgba(255, 182, 193, 1) ${100 + gradientShift}%
  )`;

  // 🎞 Card movement (left & right)
  const moveDistance = window.innerWidth * 0.35;
  const moveRow1 = progress * moveDistance;
  const moveRow2 = progress * moveDistance;

  return (
    <div className="scroll-hold-section" ref={sectionRef}>
      <div className="sample-container" style={{ background }}>
        {/* Row 1 */}
        <h2 className="sample-title">Sample Numbers</h2>
        <h3 className="row-title">Row No. 1</h3>
        <div
          className="row"
          style={{
            transform: `translateX(-${moveRow1}px)`,
          }}
        >
          {[61, 73, 89, 102, "+102"].map((num, i) => (
            <div key={i} className="card">
              <div className="card-content">
                <div className="card-text">
                  <h2 className="card-number">{num}</h2>
                  <p className="card-unit">Unit</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <h2 className="sample-title">Sample Numbers</h2>
        <h3 className="row-title">Row No. 2</h3>
        <div
          className="row"
          style={{
            transform: `translateX(${moveRow2}px)`,
          }}
        >
          {[49, 59, 71, 81, "+81"].map((num, i) => (
            <div key={i} className="card">
              <div className="card-content">
                <div className="card-text">
                  <h2 className="card-number">{num}</h2>
                  <p className="card-unit">Unit</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleCards;
