import React, { useState, useEffect } from "react";
import "./FlipText.css"; // CSS alag file me rakho ya style tag use karo

const FlipText = () => {
  const texts = [
    "Freelancer",
    "Software Developer",
    "App Development",
    "AI Tools",   
    "Web Development",

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1300); // change every 2 sec
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flip-wrapper">
      <div key={index} className="flip-text">
        {texts[index]}
      </div>
    </div>
  );
};

export default FlipText;
