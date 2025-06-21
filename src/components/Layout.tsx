import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HeaderIcons } from "./HeaderIcons";
import Footer from "./Footer";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-ghibli-park-cream-50 font-sling">
      {/* Header inspired by Ghibli Museum website */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-ghibli-park-cream-100 via-ghibli-park-brown-50 to-ghibli-park-cream-100 border-b-2 border-ghibli-park-brown-200 shadow-lg">
        {/* Top thin accent line */}
        <div className="h-1 bg-gradient-to-r from-ghibli-park-rust-400 via-ghibli-park-brown-400 to-ghibli-park-rust-400"></div>

        <div className="container mx-auto px-6 py-4">
          {/* Main header content */}
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <HeaderIcons />
          </div>
        </div>

        {/* Bottom subtle shadow line */}
        <div className="h-px bg-gradient-to-r from-transparent via-ghibli-park-brown-300 to-transparent"></div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
