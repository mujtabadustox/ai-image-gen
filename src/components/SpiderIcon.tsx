import React from "react";

interface SpiderIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SpiderIcon: React.FC<SpiderIconProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-full ${className}`}
      style={{ backgroundColor: "#6578CD" }}
    >
      {/* Eyes at top */}
      <div className="absolute top-0 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
      <div className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
      <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
      <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
      {/* 8 Legs */}
      <div
        className="absolute -top-1 -left-0.5 w-0.5 h-1.5 rounded-full transform rotate-45"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute -top-1 -right-0.5 w-0.5 h-1.5 rounded-full transform -rotate-45"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute top-0.5 -left-1.5 w-1.5 h-0.5 rounded-full"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute top-0.5 -right-1.5 w-1.5 h-0.5 rounded-full"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute top-1.5 -left-1.5 w-1.5 h-0.5 rounded-full"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute top-1.5 -right-1.5 w-1.5 h-0.5 rounded-full"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute -bottom-1 -left-0.5 w-0.5 h-1.5 rounded-full transform -rotate-45"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
      <div
        className="absolute -bottom-1 -right-0.5 w-0.5 h-1.5 rounded-full transform rotate-45"
        style={{ backgroundColor: "#6578CD" }}
      ></div>
    </div>
  );
};

export default SpiderIcon;
