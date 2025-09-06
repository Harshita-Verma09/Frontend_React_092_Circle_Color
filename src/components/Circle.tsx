import React, { useState } from "react";

interface Circle {
  x: number;
  y: number;
  color: string;
}

const App: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newCircle: Circle = {
      x: e.clientX,
      y: e.clientY,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    };
    setCircles((prev) => [...prev, newCircle]);
  };
  

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        background: "#121212", // Dark theme
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Placeholder text */}
      {circles.length === 0 && (
        <span style={{ opacity: 0.7 }}>
          Click here and have fun with circle 🎨
        </span>
      )}

      {/* Circles */}
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: circle.x - 6,
            top: circle.y - 6,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: circle.color,
          }}
        />
      ))}
    </div>
  );
};

export default App;
