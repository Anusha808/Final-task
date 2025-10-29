import React, { useEffect, useRef, useState } from "react";
import zoomImg from "../../assets/zoomimg2.jpg"; // your image path

const AboutTheRace = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const currentImage = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (currentSection) observer.observe(currentSection);

    const handleScroll = () => {
      if (!currentImage || !isVisible) return;

      const rect = currentSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // ✅ Calculate progress of scroll inside section
      const scrollProgress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      // ✅ Smooth zoom-in effect
      const scale = 1 + scrollProgress * 0.2; // 20% zoom
      const translateY = scrollProgress * -40; // slight upward movement
      const opacity = 0.9 + scrollProgress * 0.1;

      currentImage.style.transform = `translateY(${translateY}px) scale(${scale})`;
      currentImage.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [isVisible]);

  return (
    <div>
      {/* 🟢 ABOUT SECTION */}
      <section ref={sectionRef} style={aboutSectionStyle}>
        <div style={textWrapperStyle}>
          <h1 style={headingStyle}>ABOUT</h1>
          <h1 style={headingStyle}>THE RACE</h1>
          <div style={tightTextBlock}>
            <p style={paragraphStyle}>This is a race of yourself to yourself.</p>
            <p style={paragraphStyle}>Fight the race! Develop the website.</p>
            <p style={paragraphStyle}>Complete the task.</p>
            <p style={lastParagraphStyle}>
              As a developer, it's{" "}
              <span style={highlightStyle}>Not That Hard</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 🖼️ IMAGE SECTION WITH SMOOTH ZOOM */}
      <section style={imageSectionStyle}>
        <img
          ref={imageRef}
          src={zoomImg}
          alt="Race Visualization"
          style={imageStyle}
        />
      </section>
    </div>
  );
};

/* 🎨 Styles */
const aboutSectionStyle = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #00b894 0%, #ffffff 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Poppins', sans-serif",
  color: "white",
};

const textWrapperStyle = {
  maxWidth: "800px",
};

const headingStyle = {
  fontSize: "3rem",
  fontWeight: "600",
  margin: "0",
  lineHeight: "1.2",
};

const tightTextBlock = {
  marginTop: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  color: "#f5f5f5",
  margin: "0",
};

const lastParagraphStyle = { ...paragraphStyle };

const highlightStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontStyle: "italic",
};

const imageSectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  background: "#fff",
};

const imageStyle = {
  width: "90%", // ✅ Not full screen initially
  maxWidth: "1200px",
  height: "auto",
  objectFit: "contain",
  transform: "translateY(0px) scale(1)",
  transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
  opacity: 0.9,
};

export default AboutTheRace;