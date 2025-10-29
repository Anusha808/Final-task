import React, { useState } from "react";
import "./Home.css";

// 🧠 Components
import SampleCards from "../SampleCard/SampleCard"; // ✅ Added this
import ScrollNumbersSection from "../ScrollNumbersSection/ScrollNumbersSection";

const Home = () => {
  const [active, setActive] = useState(false);

  // ✅ When user clicks Home, redirect to external site
  const handleClick = () => {
    setActive(!active);
    window.location.href = "https://www.brington.in/";
    // 👉 Use window.open("https://www.brington.in/", "_blank"); to open in a new tab
  };

  return (
    <>
      {/* 🟠 Hero Section */}
      <section className="hero">
        <button
          className={`home-btn ${active ? "active" : ""}`}
          onClick={handleClick}
        >
          Home
        </button>

        <div className="hero-content">
          <h1>I am a Sample <br></br> Website</h1>
          <p>
            I'm a Sample <br /> Website, Create me <br /> as same as I am, <br />
            Don't Do any <br /> Mistakes.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </section>

      {/* 🃏 Sample Cards Section */}
      <SampleCards />   {/* ✅ Added here */}

      {/* 🔢 Scroll Numbers Section */}
      <ScrollNumbersSection />  {/* ✅ Added after SampleCards */}
    </>
  );
};

export default Home;
