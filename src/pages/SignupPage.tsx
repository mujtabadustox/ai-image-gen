import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  Heart,
  Wind,
  Wand2,
} from "lucide-react";

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-ghibli-cream-50 via-ghibli-cream-100 to-ghibli-cream-200 flex flex-col items-center justify-center px-4 relative overflow-hidden font-sling"
      style={{
        backgroundImage:
          "url('https://pllek.nl/wp-content/uploads/2025/03/Howls-Moving-Castle.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-ghibli-cream-100 bg-opacity-85"></div>
      {/* Floating Ghibli elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Magical sparkles */}
        <div className="absolute top-20 left-10 animate-pulse delay-1000">
          <Sparkles className="text-ghibli-sunset-400 opacity-60" size={28} />
        </div>
        <div className="absolute bottom-24 right-16 animate-bounce delay-500">
          <Heart className="text-ghibli-coral-400 opacity-50" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-2000">
          <Wind className="text-ghibli-forest-400 opacity-40" size={32} />
        </div>
      </div>

      {/* Large magical heading at the top */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex justify-center mb-4">
          <Wand2 className="text-ghibli-mystic-500 animate-pulse" size={64} />
        </div>
        <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ghibli-sunset-600 via-ghibli-coral-500 to-ghibli-mystic-600 drop-shadow-lg">
          SIGN UP
        </h1>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-ghibli-cream-50/95 backdrop-blur-lg rounded-2xl p-8 border-4 border-solid border-ghibli-sunset-400 shadow-2xl relative">
          {/* Subtle Spiders inside the form */}
          {/* Spider 1 - Top left corner inside form */}
          <div className="absolute top-4 left-4 animate-sway opacity-40">
            <div
              className="relative w-4 h-4 rounded-full"
              style={{ backgroundColor: "#6578CD" }}
            >
              {/* Eyes */}
              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-black rounded-full"></div>
              <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-black rounded-full"></div>
              {/* Simple legs */}
              <div
                className="absolute -top-1 -left-0.5 w-0.5 h-2 rounded-full"
                style={{
                  backgroundColor: "#6578CD",
                  transform: "rotate(-30deg)",
                }}
              ></div>
              <div
                className="absolute -top-1 -right-0.5 w-0.5 h-2 rounded-full"
                style={{
                  backgroundColor: "#6578CD",
                  transform: "rotate(30deg)",
                }}
              ></div>
              <div
                className="absolute top-0.5 -left-1.5 w-2 h-0.5 rounded-full"
                style={{ backgroundColor: "#6578CD" }}
              ></div>
              <div
                className="absolute top-0.5 -right-1.5 w-2 h-0.5 rounded-full"
                style={{ backgroundColor: "#6578CD" }}
              ></div>
            </div>
          </div>

          {/* Spider 2 - Bottom right corner inside form */}
          <div
            className="absolute bottom-4 right-4 animate-sway opacity-30"
            style={{ animationDelay: "1.5s" }}
          >
            <div
              className="relative w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: "#6578CD" }}
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
              {/* Simple legs */}
              <div
                className="absolute -top-1 -left-0.5 w-0.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "#6578CD",
                  transform: "rotate(-35deg)",
                }}
              ></div>
              <div
                className="absolute -top-1 -right-0.5 w-0.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "#6578CD",
                  transform: "rotate(35deg)",
                }}
              ></div>
              <div
                className="absolute top-0.5 -left-1 w-1.5 h-0.5 rounded-full"
                style={{ backgroundColor: "#6578CD" }}
              ></div>
              <div
                className="absolute top-0.5 -right-1 w-1.5 h-0.5 rounded-full"
                style={{ backgroundColor: "#6578CD" }}
              ></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-ghibli-sunset-700 mb-2">
              Create Account
            </h1>
            <p className="text-ghibli-sunset-600">
              Join the Ghibli Gen community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-ghibli-sunset-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-sunset-500"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-ghibli-cream-100/80 border-2 border-ghibli-sunset-300 rounded-lg text-ghibli-sunset-800 placeholder-ghibli-sunset-500 focus:outline-none focus:ring-2 focus:ring-ghibli-coral-400 focus:border-ghibli-coral-400 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ghibli-sunset-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-sunset-500"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-ghibli-cream-100/80 border-2 border-ghibli-sunset-300 rounded-lg text-ghibli-sunset-800 placeholder-ghibli-sunset-500 focus:outline-none focus:ring-2 focus:ring-ghibli-coral-400 focus:border-ghibli-coral-400 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ghibli-sunset-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-sunset-500"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-ghibli-cream-100/80 border-2 border-ghibli-sunset-300 rounded-lg text-ghibli-sunset-800 placeholder-ghibli-sunset-500 focus:outline-none focus:ring-2 focus:ring-ghibli-coral-400 focus:border-ghibli-coral-400 transition-all"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ghibli-sunset-500 hover:text-ghibli-coral-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ghibli-sunset-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-sunset-500"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-ghibli-cream-100/80 border-2 border-ghibli-sunset-300 rounded-lg text-ghibli-sunset-800 placeholder-ghibli-sunset-500 focus:outline-none focus:ring-2 focus:ring-ghibli-coral-400 focus:border-ghibli-coral-400 transition-all"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-ghibli-sunset-500 to-ghibli-coral-500 hover:from-ghibli-sunset-600 hover:to-ghibli-coral-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-ghibli-sunset-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-ghibli-coral-500 hover:text-ghibli-coral-600 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
