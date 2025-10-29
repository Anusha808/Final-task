import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HarryWilliams from "../../assets/Harry Williams.jpg";
import VeronikaZakharova from "../../assets/Veronika Zakharova.jpg";
import LissaCross from "../../assets/Lissa Cross.jpg";
import SheldonSmith from "../../assets/Sheldon Smith.jpg";
import AkiraLee from "../../assets/Akira Lee.jpg";
import AnnJacobs from "../../assets/Ann Jacobs.jpg";
import MurtyYang from "../../assets/Murty Yang.jpg";
import JasonGuhl from "../../assets/Jason Guhl.jpg";

const speakers = [
  { name: "Harry Williams", image: HarryWilliams },
  { name: "Veronika Zakharova", image: VeronikaZakharova },
  { name: "Lissa Cross", image: LissaCross },
  { name: "Sheldon Smith", image: SheldonSmith },
  { name: "Akira Lee", image: AkiraLee },
  { name: "Ann Jacobs", image: AnnJacobs },
  { name: "Murty Yang", image: MurtyYang },
  { name: "Jason Guhl", image: JasonGuhl },
];

const Speakers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff", // ✅ White background across entire page
        padding: "80px 0",
      }}
    >
      <div
        style={{
          width: "95%", // ✅ almost full width but keeps slight side padding
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: 56,
            fontWeight: "bold",
            color: "#000000",
            marginBottom: 70,
          }}
        >
          Speakers
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // ✅ two columns layout
            gap: "60px 100px",
            justifyItems: "center",
          }}
        >
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "700px", // ✅ increased width for larger layout
                borderBottom: "1px solid #ddd",
                paddingBottom: 30,
                backgroundColor: "#ffffff", // ✅ white inside each card
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 12,
                  objectFit: "cover",
                  marginRight: 30,
                }}
              />

              <div style={{ flexGrow: 1 }}>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "#000000",
                  }}
                >
                  {speaker.name}
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  Director of Mobile Gaming, Fixer
                </div>
              </div>

              <a
                href="https://www.linkedin.com/company/wix-com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 28px",
                  borderRadius: 25,
                  border: "1.5px solid #333",
                  fontSize: 16,
                  color: "#333",
                  textDecoration: "none",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  marginLeft: 10,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#333";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#333";
                }}
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
