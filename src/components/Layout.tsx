import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HeaderIcons } from "./HeaderIcons";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-ghibli-cream-50 ">
      <header
        className="sticky top-0 text-ghibli-sunset-800 z-50"
        style={{
          borderBottom: "1px solid rgba(240, 194, 123, 0.4)",
          background: "rgba(254, 249, 243, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 20px rgba(242, 129, 29, 0.1)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <Navigation />
          <HeaderIcons />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
