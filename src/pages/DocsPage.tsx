import React, { useState } from "react";
import { Book, Code, Lightbulb, Zap, ChevronRight, Search } from "lucide-react";

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Zap size={20} />,
      content: {
        title: "Getting Started with Ghibli Gen",
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
              'Describe the scene you want to create. Be specific about characters, settings, and mood. For example: "A young girl with red hair sitting by a window in a cozy cottage, Studio Ghibli style"',
          },
          {
            title: "Choose Your Style",
            content:
              "Select from our various Ghibli-inspired styles: Classic, Modern, Watercolor, or Sketch.",
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
            title: "Use Ghibli Keywords",
            content:
              'Include terms like "magical", "whimsical", "pastoral", "floating", "mystical" to enhance the Ghibli aesthetic.',
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
        description: "Integrate Ghibli Gen into your applications",
        items: [
          {
            title: "Authentication",
            content:
              "All API requests require authentication using your API key. Include it in the Authorization header: Bearer YOUR_API_KEY",
          },
          {
            title: "Generate Image Endpoint",
            content:
              "POST /api/v1/generate\n\nParameters:\n- prompt (string): Your image description\n- style (string): ghibli-classic, ghibli-modern, ghibli-watercolor, ghibli-sketch\n- aspect_ratio (string): 1:1, 16:9, 9:16, 4:3\n- quality (string): standard, high, ultra",
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
              'Prompt: "A wise old wizard with a long white beard and kind eyes, wearing flowing robes, Studio Ghibli style"\n\nResult: Creates a detailed character portrait with soft lighting and expressive features.',
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

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about creating magical artwork with
            Ghibli Gen
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm font-medium">{section.title}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              {currentSection && (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {currentSection.content.title}
                    </h2>
                    <p className="text-xl text-gray-300">
                      {currentSection.content.description}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {currentSection.content.items.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-6"
                      >
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h3>
                        <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                          {item.content}
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeSection === "api-reference" && (
                    <div className="mt-8 p-6 bg-black/30 rounded-lg border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Example Request
                      </h4>
                      <pre className="text-green-400 text-sm overflow-x-auto">
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
