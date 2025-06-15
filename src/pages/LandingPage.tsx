import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Image,
  Users,
  BookOpen,
  Wind,
  Heart,
  Star,
  Sun,
  Bird,
  Origami,
  WandSparkles,
  ArrowUp,
} from "lucide-react";
import { Button } from "../components/ui/button";

const LandingPage: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Avant+Garde:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'ITC Avant Garde Gothic Medium', 'Avant Garde', 'Century Gothic', 'Futura', sans-serif !important;
        }
        
        body, html {
          font-family: 'ITC Avant Garde Gothic Medium', 'Avant Garde', 'Century Gothic', 'Futura', sans-serif !important;
        }
        
        @keyframes spin360pause {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div
        className="min-h-screen bg-ghibli-cream-50 relative overflow-hidden"
        style={{
          fontFamily:
            "'ITC Avant Garde Gothic Medium', 'Avant Garde', 'Century Gothic', 'Futura', sans-serif",
        }}
      >
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-4"
        >
          {/* Floating elements for magical atmosphere */}
          {/* Warm sun */}
          <div className="absolute top-40 right-20 animate-pulse delay-1000 z-10">
            <Sparkles className="text-ghibli-mystic-300 opacity-60" size={32} />
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-20 left-10 animate-bounce delay-1000">
              <Heart className="text-ghibli-sunset-300 opacity-60" size={24} />
            </div>

            <div className="absolute bottom-24 right-4">
              <Origami
                className="text-ghibli-park-rust-400 opacity-60"
                size={36}
              />
            </div>
            <div className="absolute bottom-40 left-4 animate-bounce delay-1000">
              <Wind className="text-ghibli-sky-300 opacity-60" size={28} />
            </div>
          </div>

          <div className="container mx-auto text-center relative z-20">
            {/* Main content area with sketched border */}
            <div
              className="relative rounded-2xl p-12 shadow-2xl border-4 border-solid border-ghibli-orange overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://pllek.nl/wp-content/uploads/2025/03/Howls-Moving-Castle.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Background overlay inside container for text readability */}
              <div className="absolute inset-0 bg-ghibli-cream-100 bg-opacity-85"></div>

              {/* Corner decorative elements */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-3 border-t-3 border-ghibli-mystic-400 rounded-tl-lg z-10"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-3 border-t-3 border-ghibli-forest-400 rounded-tr-lg z-10"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-3 border-b-3 border-ghibli-sky-400 rounded-bl-lg z-10"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-3 border-b-3 border-ghibli-coral-400 rounded-br-lg z-10"></div>

              <div className="relative z-20">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                    <span className="text-ghibli-sunset-600">Create</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ghibli-mystic-500 via-ghibli-coral-400 to-ghibli-sunset-500">
                      Magical
                    </span>
                    <br />
                    <span className="text-ghibli-forest-600">Worlds</span>
                  </h1>
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <Heart className="text-ghibli-coral-400" size={24} />
                    <p className="text-xl md:text-2xl text-ghibli-sunset-700 font-medium">
                      Modern Loveable AI art generation
                    </p>
                    <Heart className="text-ghibli-coral-400" size={24} />
                  </div>
                </div>

                <p className="text-lg md:text-xl text-ghibli-sunset-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Step into a world where imagination meets artistry. Generate
                  breathtaking artwork that captures the warmth, wonder, and
                  whimsy of your favorite dreams.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Button variant="ghibli-filled" size="xxxl" asChild>
                    <Link to="/signup">
                      <WandSparkles size={42} />
                      Begin Your Journey
                    </Link>
                  </Button>
                  <Button variant="ghibli-outline" size="xxxl" asChild>
                    <Link to="/community-feed">
                      <Bird size={42} />
                      Wander Around
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-4 bg-ghibli-cyan">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Magic?
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Discover the enchanting features that make our AI art generation
                truly special
              </p>
            </div>

            <div>
              {/* Stats with sketchbook styling */}
              <div className="relative grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {/* Spider 1 - Left side of first box */}
                <div className="absolute -left-6 top-8 animate-sway">
                  <div
                    className="relative w-6 h-6 rounded-full"
                    style={{ backgroundColor: "#6578CD" }}
                  >
                    {/* Eyes */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                    {/* 8 Legs */}
                    <div
                      className="absolute -top-2 -left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-2.5 left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-10deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-2 -right-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute top-0.5 -left-2.5 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "#6578CD" }}
                    ></div>
                    <div
                      className="absolute top-0.5 -right-2.5 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "#6578CD" }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2.5 left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(10deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -right-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-45deg)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Spider 2 - Top of middle box */}
                <div
                  className="absolute left-1/2 -top-6 transform -translate-x-1/2 animate-sway"
                  style={{ animationDelay: "1s" }}
                >
                  <div
                    className="relative w-6 h-6 rounded-full"
                    style={{ backgroundColor: "#6578CD" }}
                  >
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                    {/* 8 Legs */}
                    <div
                      className="absolute -top-2 -left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-2.5 left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-10deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-2 -right-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute top-0.5 -left-2.5 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "#6578CD" }}
                    ></div>
                    <div
                      className="absolute top-0.5 -right-2.5 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "#6578CD" }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2.5 left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(10deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -right-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-45deg)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Spider 3 - Right side of third box */}
                <div
                  className="absolute -right-6 top-8 animate-sway"
                  style={{ animationDelay: "2s" }}
                >
                  <div
                    className="relative w-6 h-6 rounded-full"
                    style={{ backgroundColor: "#6578CD" }}
                  >
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                    {/* 8 Legs */}
                    <div
                      className="absolute -top-2 -left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-2.5 left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-10deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-2 -right-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute top-0.5 -left-2.5 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "#6578CD" }}
                    ></div>
                    <div
                      className="absolute top-0.5 -right-2.5 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "#6578CD" }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2.5 left-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(10deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-2 -right-1 w-0.5 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6578CD",
                        transform: "rotate(-45deg)",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 border-2 border-solid border-ghibli-cyan shadow-sm text-ghibli-cyan">
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-sm">Magical Creations</div>
                </div>
                <div className="text-center rounded-2xl p-6 border-2 border-solid shadow-sm bg-white text-ghibli-cyan">
                  <div className="text-3xl font-bold mb-2">5K+</div>
                  <div className=" text-sm">Happy Artists</div>
                </div>
                <div className="text-center rounded-2xl p-6 border-2 border-solid shadow-sm bg-white text-ghibli-cyan">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
