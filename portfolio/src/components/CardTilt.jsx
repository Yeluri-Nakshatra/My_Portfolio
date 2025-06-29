import React, { useRef } from "react";

const CardTilt = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top;  // y position within the card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out p-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl shadow-lg text-white"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default CardTilt;
