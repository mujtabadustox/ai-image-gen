import { Cat } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 group"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-ghibli-park-rust-400 to-ghibli-park-brown-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <Cat className="text-white" size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-ghibli-park-brown-800 group-hover:text-ghibli-park-rust-700 transition-colors duration-300">
          Cozy Creator
        </span>
        <span className="text-xs text-ghibli-park-brown-500 font-medium">
          AI Art Generator
        </span>
      </div>
    </Link>
  );
};
