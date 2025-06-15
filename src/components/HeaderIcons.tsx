import React from "react";
import { Link } from "react-router-dom";
import { User, Settings, Bell } from "lucide-react";

export const HeaderIcons: React.FC = () => {
  const isLoggedIn = false;

  return (
    <div className="flex items-center space-x-4">
      {isLoggedIn ? (
        <>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Settings size={20} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <User size={20} />
          </button>
        </>
      ) : (
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="text-sm font-medium hover:text-blue-400 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};
