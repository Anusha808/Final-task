import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ReactComponent as BgCircle } from "../../assets/circlesvg.svg";
import CenterIcon from "../../assets/center-icon.png";
import "./Accomplish.css";

const Accomplish = () => {
  const leftItems = ["Sample Text 1", "Sample Text", "Sample Text"];
  const rightItems = ["Sample Text", "Sample Text", "Sample Text"];

  return (
    <div className="accomplish-container">
      {/* 🧠 Heading Section */}
      <div className="accomplish-text">
        <h1>Accomplish Anything in</h1>
        <h1>Developing</h1>
        <p>
          This is the space to introduce the Services section. Briefly describe
          the types of services offered and highlight any special benefits or
          features.
        </p>
      </div>

      {/* ⚙️ Main Content */}
      <div className="accomplish-content">
        {/* Left Side */}
        <div className="accomplish-list left">
          {leftItems.map((text, i) => (
            <div key={i} className="accomplish-item">
              <FaCheckCircle className="check-icon" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Center Circle */}
        <div className="accomplish-center">
          <BgCircle className="bg-circle" />
          <div className="center-icon-wrapper">
            <img src={CenterIcon} alt="icon" className="center-icon" />
          </div>
        </div>

        {/* Right Side */}
        <div className="accomplish-list right">
          {rightItems.map((text, i) => (
            <div key={i} className="accomplish-item">
              <FaCheckCircle className="check-icon" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 Button Section */}
      <div className="button-wrapper">
        <a
          href="https://www.brington.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="create-button"
        >
          Create<br></br> Now!
        </a>
      </div>
    </div>
  );
};

export default Accomplish;
