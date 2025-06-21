import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-r from-ghibli-park-cream-100 via-ghibli-park-brown-50 to-ghibli-park-cream-100 border-t-2 border-ghibli-park-brown-200 shadow-lg font-sling">
        {/* Top subtle shadow line */}
        <div className="h-px bg-gradient-to-r from-transparent via-ghibli-park-brown-300 to-transparent"></div>

        {/* Spiders */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Normal spider - left side */}
          <div className="absolute top-4 left-8 animate-sway">
            <div className="relative w-5 h-5 rounded-full bg-ghibli-park-brown-400">
              {/* Eyes at top */}
              <div className="absolute top-0 left-0.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-0 right-0.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-0.5 left-1 w-1 h-1 bg-black rounded-full"></div>
              <div className="absolute top-0.5 right-1 w-1 h-1 bg-black rounded-full"></div>
              {/* 8 Legs */}
              <div className="absolute -top-1.5 -left-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform rotate-45"></div>
              <div className="absolute -top-1.5 -right-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform -rotate-45"></div>
              <div className="absolute top-0.5 -left-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute top-0.5 -right-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute top-2 -left-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute top-2 -right-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute -bottom-1.5 -left-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform -rotate-45"></div>
              <div className="absolute -bottom-1.5 -right-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform rotate-45"></div>
            </div>
          </div>

          {/* Upside down spider - right side with eyes at bottom */}
          <div
            className="absolute top-4 right-8 animate-sway"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="relative w-5 h-5 rounded-full bg-ghibli-park-brown-400">
              {/* Eyes at bottom for upside-down look */}
              <div className="absolute bottom-0 left-0.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-0 right-0.5 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-0.5 left-1 w-1 h-1 bg-black rounded-full"></div>
              <div className="absolute bottom-0.5 right-1 w-1 h-1 bg-black rounded-full"></div>
              {/* 8 Legs pointing upward */}
              <div className="absolute -top-1.5 -left-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform -rotate-45"></div>
              <div className="absolute -top-1.5 -right-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform rotate-45"></div>
              <div className="absolute top-0.5 -left-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute top-0.5 -right-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute top-2 -left-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute top-2 -right-2 w-2 h-0.5 rounded-full bg-ghibli-park-brown-400"></div>
              <div className="absolute -bottom-1.5 -left-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform rotate-45"></div>
              <div className="absolute -bottom-1.5 -right-0.5 w-0.5 h-2 rounded-full bg-ghibli-park-brown-400 transform -rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-4">
          <p className="text-ghibli-park-brown-700 text-xl font-thin relative z-10">
            All rights Reserved 2025
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-ghibli-park-rust-400 via-ghibli-park-brown-400 to-ghibli-park-rust-400"></div>
      </footer>
    </>
  );
};

export default Footer;
