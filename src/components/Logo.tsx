import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">CC</span>
      </div>
      <span className="text-xl font-semibold">Cozy Creator</span>
    </Link>
  );
};
