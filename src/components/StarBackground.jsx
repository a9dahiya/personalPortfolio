import { useMemo } from "react";
import "../styles/stars.css";

const StarLayer = ({ count, size, speed, opacity }) => {
  const boxShadowStyle = useMemo(() => {
    let shadows = "";
    for (let i = 0; i < count; i++) {
      // Random X and Y positions within a 2000px box
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows += `${x}px ${y}px #FFF, `;
    }
    return shadows.slice(0, -2);
  }, [count]);

  return (
    <div
      className={`star-layer ${speed}`}
      style={{
        width: size,
        height: size,
        opacity: opacity,
        boxShadow: boxShadowStyle,
      }}
    />
  );
};

export default function StarBackground() {
  return (
    <div className="star-container">
      <StarLayer count={800} size="1px" speed="slow" opacity={0.6} />
      
      <StarLayer count={300} size="2px" speed="medium" opacity={0.8} />
      
      <StarLayer count={100} size="3px" speed="fast" opacity={1} />
    </div>
  );
}