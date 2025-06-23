import React, { useState } from "react";
import {
  Book,
  Code,
  Lightbulb,
  Zap,
  ChevronRight,
  Search,
  Sparkles,
  Heart,
  Wind,
  Star,
} from "lucide-react";

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Zap size={20} />,
      content: {
        title: "Getting Started with AI Art Generator",
        description: "Learn how to create your first magical artwork",
        items: [
          {
            title: "Create Your Account",
            content:
              "Sign up for a free account to start generating artwork. You'll get 10 free generations to begin with.",
          },
          {
            title: "Write Your First Prompt",
            content:
              'Describe the scene you want to create. Be specific about characters, settings, and mood. For example: "A young girl with red hair sitting by a window in a cozy cottage, anime style"',
          },
          {
            title: "Choose Your Style",
            content:
              "Select from our various anime-inspired styles: Classic, Modern, Watercolor, or Sketch.",
          },
          {
            title: "Generate and Download",
            content:
              "Click generate and wait for the magic to happen. Download your artwork in high resolution.",
          },
        ],
      },
    },
    {
      id: "prompt-guide",
      title: "Prompt Writing Guide",
      icon: <Lightbulb size={20} />,
      content: {
        title: "Writing Effective Prompts",
        description: "Master the art of prompt writing for better results",
        items: [
          {
            title: "Be Descriptive",
            content:
              "Include details about characters, environment, lighting, and mood. The more specific you are, the better the results.",
          },
          {
            title: "Use Style Keywords",
            content:
              'Include terms like "magical", "whimsical", "pastoral", "floating", "mystical" to enhance the artistic aesthetic.',
          },
          {
            title: "Specify Characters",
            content:
              'Describe age, appearance, clothing, and expressions. Example: "young girl with braided hair wearing a blue dress"',
          },
          {
            title: "Set the Scene",
            content:
              'Describe the environment: "in a sunlit meadow", "inside a magical library", "on a floating island"',
          },
        ],
      },
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Code size={20} />,
      content: {
        title: "API Documentation",
        description: "Integrate AI Art Generator into your applications",
        items: [
          {
            title: "Authentication",
            content:
              "All API requests require authentication using your API key. Include it in the Authorization header: Bearer YOUR_API_KEY",
          },
          {
            title: "Generate Image Endpoint",
            content:
              "POST /api/v1/generate\n\nParameters:\n- prompt (string): Your image description\n- style (string): anime-classic, anime-modern, watercolor, sketch\n- aspect_ratio (string): 1:1, 16:9, 9:16, 4:3\n- quality (string): standard, high, ultra",
          },
          {
            title: "Rate Limits",
            content:
              "Free tier: 10 requests per day\nPro tier: 100 requests per day\nEnterprise: Unlimited",
          },
          {
            title: "Response Format",
            content:
              "Successful responses return a JSON object with image_url, generation_id, and metadata.",
          },
        ],
      },
    },
    {
      id: "examples",
      title: "Examples & Inspiration",
      icon: <Book size={20} />,
      content: {
        title: "Example Prompts & Results",
        description: "Get inspired by these example prompts and their results",
        items: [
          {
            title: "Character Portraits",
            content:
              'Prompt: "A wise old wizard with a long white beard and kind eyes, wearing flowing robes, anime style"\n\nResult: Creates a detailed character portrait with soft lighting and expressive features.',
          },
          {
            title: "Magical Landscapes",
            content:
              'Prompt: "A floating castle surrounded by clouds and flying creatures, with waterfalls cascading into the sky"\n\nResult: Generates an epic fantasy landscape with dreamy, ethereal qualities.',
          },
          {
            title: "Cozy Interiors",
            content:
              'Prompt: "A warm kitchen with herbs hanging from the ceiling, sunlight streaming through windows, and a cat sleeping on the windowsill"\n\nResult: Creates an inviting, homey scene with rich details and warm colors.',
          },
          {
            title: "Nature Scenes",
            content:
              'Prompt: "A mystical forest with glowing mushrooms, ancient trees, and small forest spirits hiding among the leaves"\n\nResult: Produces an enchanting woodland scene with magical elements.',
          },
        ],
      },
    },
  ];

  // Filter sections based on search query
  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.items.some(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen font-sling bg-gradient-to-b from-ghibli-cream-50 via-ghibli-cream-100 to-ghibli-cream-200 relative overflow-hidden">
      {/* Magical firefly animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 animate-firefly-float">
          <div className="w-3 h-3 rounded-full animate-pulse bg-yellow-300 opacity-85 shadow-firefly"></div>
        </div>
        <div
          className="absolute top-48 right-24 animate-firefly-float-slow"
          style={{ animationDelay: "1.5s" }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse bg-yellow-200 opacity-90 shadow-firefly-small"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
        <div
          className="absolute top-64 left-32 animate-firefly-drift"
          style={{ animationDelay: "3s" }}
        >
          <div
            className="w-3.5 h-3.5 rounded-full animate-pulse bg-yellow-400 opacity-80 shadow-firefly-large"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div
          className="absolute bottom-32 right-16 animate-firefly-float"
          style={{ animationDelay: "2s" }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse bg-yellow-300 opacity-85 shadow-firefly"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        <div
          className="absolute bottom-48 left-20 animate-firefly-drift-slow"
          style={{ animationDelay: "4s" }}
        >
          <div
            className="w-3 h-3 rounded-full animate-pulse bg-yellow-200 opacity-90 shadow-firefly"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div
          className="absolute top-32 right-40 animate-firefly-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse bg-yellow-400 opacity-75 shadow-firefly-small"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Sparkles className="text-ghibli-mystic-300 opacity-60" size={32} />
        </div>
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Heart className="text-ghibli-sunset-300 opacity-60" size={24} />
        </div>
        <div className="absolute bottom-40 left-4 animate-bounce delay-1000">
          <Wind className="text-ghibli-sky-300 opacity-60" size={28} />
        </div>
        <div className="absolute bottom-20 right-8 animate-pulse delay-500">
          <Star className="text-ghibli-coral-300 opacity-60" size={20} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ghibli-mystic-500 via-ghibli-coral-400 to-ghibli-sunset-500">
              Documentation
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-ghibli-cream-50/70 backdrop-blur-lg rounded-2xl p-6 border-4 border-ghibli-sunset-200 sticky top-8 relative overflow-hidden">
              {/* Corner decorative elements */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-ghibli-mystic-400 rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-ghibli-forest-400 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-ghibli-sky-400 rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-ghibli-coral-400 rounded-br-lg"></div>

              {/* Search Bar in Sidebar */}
              <div className="mb-6 relative z-10">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-sunset-400"
                    size={16}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search docs..."
                    className="w-full pl-8 pr-3 py-2 text-sm bg-ghibli-cream-50/80 backdrop-blur-lg border-2 border-ghibli-sunset-200 rounded-lg text-ghibli-sunset-700 placeholder-ghibli-sunset-400 focus:outline-none focus:ring-2 focus:ring-ghibli-mystic-300 focus:border-ghibli-mystic-300 transition-colors"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-ghibli-sunset-700 mb-4 relative z-10">
                Contents
              </h3>
              <nav className="space-y-2 relative z-10">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-ghibli-sunset-400 text-white shadow-lg"
                        : "text-ghibli-sunset-600 hover:bg-ghibli-sunset-100 hover:text-ghibli-sunset-700"
                    }`}
                  >
                    <span
                      className={
                        activeSection === section.id
                          ? "text-white"
                          : "text-ghibli-sunset-400"
                      }
                    >
                      {section.icon}
                    </span>
                    <span className="text-sm font-medium">{section.title}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </button>
                ))}
              </nav>

              {searchQuery && filteredSections.length === 0 && (
                <div className="text-center text-ghibli-sunset-500 text-sm mt-4 relative z-10">
                  No results found
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-ghibli-cream-50/70 backdrop-blur-lg rounded-2xl p-8 border-4 border-ghibli-sunset-200 relative overflow-hidden">
              {/* Corner decorative elements */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-3 border-t-3 border-ghibli-mystic-400 rounded-tl-lg"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-r-3 border-t-3 border-ghibli-forest-400 rounded-tr-lg"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l-3 border-b-3 border-ghibli-sky-400 rounded-bl-lg"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-3 border-b-3 border-ghibli-coral-400 rounded-br-lg"></div>

              {/* Inner firefly animations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
                <div className="absolute top-16 left-20 animate-firefly-float">
                  <div className="w-2 h-2 rounded-full animate-pulse bg-yellow-300 opacity-90 shadow-firefly-small"></div>
                </div>
                <div
                  className="absolute top-32 right-16 animate-firefly-float-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full animate-pulse bg-yellow-200 opacity-85 shadow-firefly"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </div>
                <div
                  className="absolute bottom-20 left-1/3 animate-firefly-drift"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-pulse bg-yellow-300 opacity-90 shadow-firefly-small"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>
              </div>

              {currentSection && (
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-ghibli-sunset-700 mb-4">
                      {currentSection.content.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {currentSection.content.items.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-ghibli-mystic-400 pl-6 bg-ghibli-cream-100/50 rounded-r-lg py-4 pr-4"
                      >
                        <h3 className="text-xl font-semibold text-ghibli-sunset-700 mb-3">
                          {item.title}
                        </h3>
                        <div className="text-ghibli-sunset-600 whitespace-pre-line leading-relaxed">
                          {item.content}
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeSection === "api-reference" && (
                    <div className="mt-8 p-6 bg-ghibli-night-800/80 rounded-lg border-2 border-ghibli-night-600">
                      <h4 className="text-lg font-semibold text-ghibli-cream-100 mb-3">
                        Example Request
                      </h4>
                      <pre className="text-ghibli-forest-300 text-sm overflow-x-auto">
                        {`curl -X POST https://api.ghibligen.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A magical floating castle in the clouds",
    "style": "ghibli-classic",
    "aspect_ratio": "16:9",
    "quality": "high"
  }'`}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
