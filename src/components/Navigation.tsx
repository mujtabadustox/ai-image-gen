import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/generate", label: "Generate" },
    { path: "/community-feed", label: "Community" },
    { path: "/docs", label: "Docs" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-colors hover:text-blue-400 ${
            location.pathname === item.path
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "text-[#F7F8F8]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
