import React, { useState } from "react";
import {
  Wand2,
  Settings,
  Download,
  Share,
  Heart,
  ChevronDown,
  X,
  HelpCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Slider } from "../components/ui/slider";
import { Switch } from "../components/ui/switch";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { HeaderIcons } from "../components/HeaderIcons";
import SpiderIcon from "../components/SpiderIcon";

const GeneratePage: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [aspectRatio, setAspectRatio] = useState([1]);
  const [motionValue, setMotionValue] = useState([0.5]);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [credits, setCredits] = useState(100);

  const handleModelToggle = (modelValue: string) => {
    setSelectedModels((prev) => {
      if (prev.includes(modelValue)) {
        // Remove if already selected
        return prev.filter((m) => m !== modelValue);
      } else {
        // Add if not selected
        return [...prev, modelValue];
      }
    });
  };

  const removeModel = (modelValue: string) => {
    setSelectedModels((prev) => prev.filter((m) => m !== modelValue));
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || credits <= 0) return;

    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      // Demo images for different aspect ratios
      const demoImages = {
        1: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=512&h=512&fit=crop", // Square 1:1
        2: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=640&h=480&fit=crop", // 4:3
        3: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=720&h=405&fit=crop", // 16:9
        4: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=405&h=720&fit=crop", // 9:16
      };

      setGeneratedImage(demoImages[aspectRatio[0] as keyof typeof demoImages]);
      setCredits((prev) => prev - 1);
      setIsGenerating(false);
    }, 3000);
  };

  const models = [
    { value: "ghibli-classic", label: "Classic Ghibli", tag: "anime" },
    { value: "ghibli-modern", label: "Modern Ghibli", tag: "anime" },
    { value: "ghibli-watercolor", label: "Watercolor Dreams", tag: "art" },
    { value: "ghibli-sketch", label: "Sketch Magic", tag: "art" },
    { value: "ghibli-portrait", label: "Forest Portrait", tag: "photo" },
    { value: "ghibli-landscape", label: "Mystical Landscape", tag: "photo" },
    { value: "ghibli-creatures", label: "Spirit Creatures", tag: "anime" },
    { value: "ghibli-vintage", label: "Vintage Ghibli", tag: "art" },
  ];

  const getAspectRatioLabel = (value: number) => {
    if (value <= 1) return "1:1 (Square)";
    if (value <= 2) return "4:3 (Classic)";
    if (value <= 3) return "16:9 (Landscape)";
    return "9:16 (Portrait)";
  };

  const getAspectRatioValue = (value: number) => {
    if (value <= 1) return 1;
    if (value <= 2) return 4 / 3;
    if (value <= 3) return 16 / 9;
    return 9 / 16;
  };

  return (
    <div className="h-screen bg-ghibli-park-cream-50 font-sling overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-ghibli-park-cream-100 via-ghibli-park-brown-50 to-ghibli-park-cream-100 border-b-2 border-ghibli-park-brown-200 shadow-lg">
        <div className="h-1 bg-gradient-to-r from-ghibli-park-rust-400 via-ghibli-park-brown-400 to-ghibli-park-rust-400"></div>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <div className="flex items-center space-x-4">
              <HeaderIcons />
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-ghibli-park-brown-300 to-transparent"></div>
      </header>

      {/* Main Content */}
      <main className="relative h-[calc(100vh-5rem)]">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-80 bg-ghibli-cream-100 border-r-2 border-ghibli-park-brown-200 overflow-y-auto flex flex-col">
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold text-ghibli-sunset-700 mb-6 text-center border-b border-ghibli-park-rust-300 pb-4">
                Settings
              </h2>

              {/* Settings Accordion */}
              <Accordion
                type="multiple"
                className="w-full"
                defaultValue={["item-1", "item-2"]}
              >
                <AccordionItem
                  value="item-1"
                  className="border-b border-ghibli-park-brown-300"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <p className="text-ghibli-sunset-700 text-base font-medium">
                      Model Selection
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between bg-ghibli-cream-50 border-2 border-ghibli-park-brown-300 text-ghibli-sunset-700 hover:bg-ghibli-cream-100 hover:border-ghibli-orange focus:ring-2 focus:ring-ghibli-orange h-auto min-h-12 py-3"
                        >
                          <div className="flex flex-wrap gap-1 w-full">
                            {selectedModels.length === 0 ? (
                              <span className="text-ghibli-sunset-700 font-medium">
                                Auto Select
                              </span>
                            ) : (
                              selectedModels.map((modelValue) => {
                                const model = models.find(
                                  (m) => m.value === modelValue
                                );
                                return (
                                  <span
                                    key={modelValue}
                                    className="inline-flex items-center gap-1 bg-gradient-to-r from-ghibli-sunset-400 to-ghibli-orange text-white px-2 py-1 rounded-full text-sm"
                                  >
                                    {model?.label}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeModel(modelValue);
                                      }}
                                      className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                                    >
                                      <X size={12} />
                                    </button>
                                  </span>
                                );
                              })
                            )}
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="bg-ghibli-cream-50 border-2 border-ghibli-park-brown-300 shadow-lg rounded-lg p-3 max-h-80 overflow-y-auto"
                        style={{
                          width: "var(--radix-dropdown-menu-trigger-width)",
                        }}
                        side="bottom"
                        align="start"
                        sideOffset={4}
                      >
                        <div className="space-y-1">
                          {/* Auto Select Option */}
                          <DropdownMenuItem
                            onClick={() => setSelectedModels([])}
                            className={`flex items-center justify-between px-3 py-3 rounded-md hover:bg-ghibli-cream-100 focus:bg-ghibli-cream-100 cursor-pointer transition-colors ${
                              selectedModels.length === 0
                                ? "bg-gradient-to-r from-ghibli-sunset-100 to-ghibli-orange-100 border border-ghibli-orange"
                                : "text-ghibli-sunset-700"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                  selectedModels.length === 0
                                    ? "border-ghibli-orange bg-ghibli-orange"
                                    : "border-ghibli-park-brown-300"
                                }`}
                              >
                                {selectedModels.length === 0 && (
                                  <span className="text-white text-xs">✓</span>
                                )}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium text-sm">
                                  Auto Select
                                </span>
                                <span className="text-xs text-ghibli-sunset-500">
                                  Let AI choose the best model
                                </span>
                              </div>
                            </div>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-ghibli-sunset-400 to-ghibli-orange text-white shrink-0">
                              auto
                            </span>
                          </DropdownMenuItem>

                          {/* Model Options */}
                          {models.map((model) => (
                            <DropdownMenuItem
                              key={model.value}
                              onClick={() => handleModelToggle(model.value)}
                              className={`flex items-center justify-between px-3 py-3 rounded-md hover:bg-ghibli-cream-100 focus:bg-ghibli-cream-100 cursor-pointer transition-colors ${
                                selectedModels.includes(model.value)
                                  ? "bg-gradient-to-r from-ghibli-sunset-100 to-ghibli-orange-100 border border-ghibli-orange"
                                  : "text-ghibli-sunset-700"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                    selectedModels.includes(model.value)
                                      ? "border-ghibli-orange bg-ghibli-orange"
                                      : "border-ghibli-park-brown-300"
                                  }`}
                                >
                                  {selectedModels.includes(model.value) && (
                                    <span className="text-white text-xs">
                                      ✓
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-medium text-sm">
                                    {model.label}
                                  </span>
                                  <span className="text-xs text-ghibli-sunset-500 capitalize">
                                    {model.tag} style
                                  </span>
                                </div>
                              </div>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-ghibli-sunset-400 to-ghibli-orange text-white shrink-0">
                                {model.tag}
                              </span>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-b border-ghibli-park-brown-300"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <p className="text-ghibli-sunset-700 text-base font-medium">
                      Canvas Size
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-3">
                      <p className="text-sm text-ghibli-sunset-600 font-medium">
                        {getAspectRatioLabel(aspectRatio[0])}
                      </p>
                      <div className="px-2">
                        <Slider
                          value={aspectRatio}
                          onValueChange={setAspectRatio}
                          max={4}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-ghibli-sunset-500 px-1">
                        <span>Square</span>
                        <span>Classic</span>
                        <span>Wide</span>
                        <span>Tall</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-b border-ghibli-park-brown-300"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <p className="text-ghibli-sunset-700 text-base font-medium">
                      Advanced Settings
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      {/* Motion Toggle */}
                      <div className="flex items-center justify-between p-3 bg-ghibli-cream-50 rounded border border-ghibli-park-brown-200">
                        <span className="text-sm font-medium text-ghibli-sunset-600">
                          Motion
                        </span>
                        <Switch
                          checked={motionEnabled}
                          onCheckedChange={setMotionEnabled}
                        />
                      </div>

                      {/* Motion Value Slider */}
                      {motionEnabled && (
                        <div className="p-3 bg-ghibli-cream-50 rounded border border-ghibli-park-brown-200">
                          <label className="block text-sm font-medium text-ghibli-sunset-600 mb-2">
                            Motion Intensity: {motionValue[0].toFixed(2)}
                          </label>
                          <div className="px-1">
                            <Slider
                              value={motionValue}
                              onValueChange={setMotionValue}
                              max={1}
                              min={0}
                              step={0.01}
                              className="w-full"
                            />
                          </div>
                          <div className="flex justify-between text-xs text-ghibli-sunset-500 mt-1">
                            <span>Gentle</span>
                            <span>Wild</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Credits Section - Fixed at bottom */}
            <div className="p-6 pt-0">
              <div className="border border-ghibli-park-brown-300 rounded-lg bg-white">
                <div className="px-4 py-3 border-b border-ghibli-park-brown-300">
                  <div className="flex items-center gap-2">
                    <p className="text-ghibli-sunset-700 text-base font-medium">
                      Credits
                    </p>
                    <div
                      className="relative group cursor-help"
                      title="Each generate costs 1 credit"
                    >
                      <HelpCircle
                        size={16}
                        className="text-ghibli-sunset-500 hover:text-ghibli-sunset-700 transition-colors"
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-ghibli-sunset-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                        Each generate costs 1 credit
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghibli-sunset-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <div className="flex items-center justify-center p-4 bg-ghibli-cream-50 border border-ghibli-park-brown-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <SpiderIcon size="md" />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ghibli-sunset-700">
                          {credits}
                        </div>
                        <div className="text-sm text-ghibli-sunset-500">
                          Available Credits
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col h-full">
            {/* Canvas Area */}
            <div className="flex-1 p-6">
              <div className="h-full bg-white border-2 border-ghibli-sunset-400 rounded-lg flex items-center justify-center relative">
                {/* Single static firefly in canvas */}
                <div className="absolute top-6 right-6">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 opacity-70"></div>
                </div>

                {generatedImage ? (
                  <div className="relative z-10 max-w-full max-h-full p-8">
                    <AspectRatio ratio={getAspectRatioValue(aspectRatio[0])}>
                      <img
                        src={generatedImage}
                        alt="Generated artwork"
                        className="w-full h-full object-cover rounded shadow"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      <Button variant="ghibli-filled" size="sm">
                        <Heart size={14} />
                      </Button>
                      <Button variant="ghibli-cyan-filled" size="sm">
                        <Share size={14} />
                      </Button>
                      <Button variant="ghibli-filled" size="sm">
                        <Download size={14} />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Wand2
                      size={48}
                      className="text-ghibli-sunset-400 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-ghibli-sunset-700 mb-2">
                      Your Canvas Awaits
                    </h3>
                    <p className="text-ghibli-sunset-600">
                      Describe your vision below
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Prompt Area */}
            <div className="p-6 pt-0">
              <div className="bg-white border border-ghibli-park-brown-300 rounded-lg p-4">
                <div className="space-y-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your magical vision..."
                    className="w-full h-24 px-3 py-2 border border-ghibli-park-brown-300 rounded text-ghibli-sunset-700 placeholder-ghibli-sunset-400 focus:outline-none focus:ring-1 focus:ring-ghibli-orange resize-none"
                  />
                  <div className="flex justify-center">
                    <Button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating || credits <= 0}
                      variant="ghibli-filled"
                      size="lg"
                      className="px-8"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          <span>Creating...</span>
                        </>
                      ) : (
                        <span>Generate</span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratePage;
