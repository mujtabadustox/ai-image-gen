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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&family=Architects+Daughter&family=Indie+Flower&display=swap');
        
        .ghibli-font {
          font-family: 'Kalam', 'Caveat', 'Architects Daughter', 'Indie Flower', cursive !important;
        }
      `}</style>
      <footer className="bg-ghibli-green py-8 text-center">
        <p className="ghibli-font text-black text-xl font-thin">
          All rights Reserved 2025
        </p>
      </footer>
    </>
  );
};

export default Footer;
