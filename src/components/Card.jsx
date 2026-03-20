import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Container (NO mouse tracking here)
export const CardContainer = ({ children, className }) => {
  return (
    <div
      className={className}
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
};

// ✅ CardBody (ONLY this handles tilt)
export const CardBody = ({ children, className }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 🔥 smoother tilt (reduced from 20 → 8)
    const rotateX = (y / rect.height - 0.5) * -20;
    const rotateY = (x / rect.width - 0.5) * 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className={`relative rounded-xl p-6 ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

// ✅ CardItem (same, just cleaner)
export const CardItem = ({
  children,
  className,
  translateZ = 0,
  rotateX = 0,
  rotateZ = 0,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={className}
      style={{
        transform: `
          translateZ(${translateZ}px)
          rotateX(${rotateX}deg)
          rotateZ(${rotateZ}deg)
        `,
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
    </Component>
  );
};