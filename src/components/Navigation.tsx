import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/generate", label: "Generate" },
    { path: "/community-feed", label: "Community" },
    { path: "/docs", label: "Docs" },
  ];

  // Hide navigation on landing page
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
  ) {
    return null;
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-all duration-300 hover:text-ghibli-park-rust-600 relative ${
            location.pathname === item.path
              ? "text-ghibli-park-rust-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-ghibli-park-rust-500 after:rounded-full"
              : "text-ghibli-park-brown-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-ghibli-park-rust-400 hover:after:rounded-full hover:after:transition-all hover:after:duration-300"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
