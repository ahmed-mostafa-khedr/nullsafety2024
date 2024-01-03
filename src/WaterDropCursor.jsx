import React, { useState, useEffect } from "react";

import Styles from "./styles.module.css";
const WaterDropCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 300); // تعديل القيم حسب الحاجة
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isActive ? "" : "inactive"}`}
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    >
      {/* Replace the placeholder image URL with your logo image */}
      <img src="logo.png" alt="Logo" className={Styles.logo} />
    </div>
  );
};

export default WaterDropCursor;
