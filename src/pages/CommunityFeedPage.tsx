import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Star,
  Sparkles,
  Wind,
  Bird,
  WandSparkles,
  Download,
  Loader2,
  Wand2,
} from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

// Picsum API interface
interface PicsumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface ArtworkData {
  id: number;
  title: string;
  artist: string;
  prompt: string;
  image: string;
  likes: number;
  comments?: number;
  retweets?: number;
  createdAt: string;
  aspectRatio?: string;
}

interface VideoData {
  id: number;
  title: string;
  artist: string;
  prompt: string;
  images: string[];
  likes: number;
  comments: number;
  createdAt: string;
  aspectRatio?: string;
}

const CommunityFeedPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [liveFeedData, setLiveFeedData] = useState<ArtworkData[]>([]);
  const [videosData, setVideosData] = useState<VideoData[]>([]);
  const [xPostsData, setXPostsData] = useState<ArtworkData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  // Sample titles and prompts arrays
  const sampleTitles = [
    "Floating Castle in the Clouds",
    "Forest Spirit Guardian",
    "Dragon's Valley",
    "Magical Train Station",
    "Sky Pirates Airship",
    "Underwater Palace",
    "Moonlit Garden",
    "Crystal Cave Adventure",
    "Enchanted Library",
    "Mystical Tea House",
    "Flying Whale Migration",
    "Ancient Tree City",
    "Rainbow Bridge",
    "Starlit Observatory",
    "Wind Temple",
    "Flower Field Dance",
    "Mountain Village",
    "Sacred Grove",
    "Cloud Castle",
    "Magical Marketplace",
  ];

  const samplePrompts = [
    "A magical floating castle surrounded by fluffy clouds, Studio Ghibli style with soft pastels and dreamy atmosphere",
    "Ancient forest spirit with glowing eyes protecting a mystical woodland, emerald greens and golden light filtering through trees",
    "A peaceful valley where dragons and humans live in harmony, warm sunset colors with magical sparkles in the air",
    "A whimsical train station where spirits board trains to other worlds, Victorian architecture with mystical elements",
    "Steampunk airship sailing through cotton candy clouds with brave sky pirates aboard, brass and copper details gleaming",
    "An enchanted underwater palace with coral gardens and friendly sea creatures, bioluminescent blues and teals",
    "A serene garden bathed in moonlight with glowing flowers and gentle spirits",
    "Explorers discovering a magical crystal cave with rainbow reflections",
    "Ancient library floating in the sky with books that glow and pages that turn by themselves",
    "Traditional Japanese tea house where forest spirits gather for evening tea ceremonies",
    "Majestic whales swimming through clouds in the sky, carrying tiny villages on their backs",
    "A massive tree that houses an entire civilization, with spiral staircases and hanging bridges",
    "A bridge made of pure rainbow light connecting two mystical mountain peaks",
    "Observatory tower reaching into the stars where astronomers study magical constellations",
    "Sacred temple floating in the wind where monks meditate among the clouds",
    "Field of flowers that dance and sing in the breeze, petals glowing like fireflies",
    "Mountain village where every house is carved into the living rock",
    "Ancient grove where time moves differently and seasons change with each step",
    "Castle made entirely of crystallized clouds floating above the earth",
    "Bustling marketplace where creatures from different worlds come to trade magical items",
  ];

  const sampleArtists = [
    "SkyDreamer",
    "ForestWhisperer",
    "DragonHeart",
    "CloudWalker",
    "SpiritGuide",
    "MoonlitArtist",
    "CrystalSeeker",
    "WindChaser",
    "StarGazer",
    "MysticBrush",
    "CloudPainter",
    "TreeSpeaker",
    "RainbowMaker",
    "StormRider",
    "FlowerDancer",
    "MountainSage",
    "RiverSong",
    "SkyCaptain",
    "EarthShaper",
    "FireWeaver",
  ];

  const videoTitles = [
    "Floating Castle Animation",
    "Forest Spirit Dance",
    "Dragon Flight Sequence",
    "Magical Train Journey",
    "Sky Pirates Adventure",
    "Underwater Palace Tour",
  ];

  const videoPrompts = [
    "Animated sequence of a floating castle moving through clouds",
    "Magical forest spirits dancing in the moonlight",
    "Dragons soaring through mountain valleys at sunset",
    "Mystical train journey through different magical realms",
    "Sky pirates navigating through storm clouds",
    "Underwater exploration of a coral palace",
  ];

  const xPostTitles = [
    "Amazing Ghibli AI Art!",
    "My first AI creation",
    "AI Art Revolution",
    "Studio Ghibli vibes",
    "Magical AI generation",
    "Can't believe this is AI!",
  ];

  const xPostPrompts = [
    "Just generated this stunning piece using AI! #GhibliArt #AI",
    "Can't believe I made this with AI! Studio Ghibli vibes 🎨",
    "The future of art is here! #AIArt #StudioGhibli #Future",
    "AI creating magic ✨ #StudioGhibli #AIGenerated",
    "This AI tool is incredible! #GhibliStyle #ArtificialIntelligence",
    "Mind blown by AI art capabilities! #DigitalArt #Ghibli",
  ];

  // Add aspect ratio options
  const aspectRatios = [
    "h-64", // square-ish
    "h-72", // medium
    "h-80", // tall
    "h-96", // very tall
    "h-60", // short
    "h-56", // shorter
  ];

  // Function to get random aspect ratio
  const getRandomAspectRatio = () => {
    return aspectRatios[Math.floor(Math.random() * aspectRatios.length)];
  };

  // Fetch images from Picsum API
  const fetchImages = useCallback(async (pageNum: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=20`
      );
      const images: PicsumImage[] = await response.json();

      if (images.length === 0) {
        setHasMore(false);
        return;
      }

      // Create live feed data
      const newLiveFeed = images.slice(0, 12).map((img, index) => ({
        id: parseInt(img.id),
        title: sampleTitles[index % sampleTitles.length],
        artist: sampleArtists[index % sampleArtists.length],
        prompt: samplePrompts[index % samplePrompts.length],
        image: `${img.download_url}?random=${Date.now()}-${index}`,
        likes: Math.floor(Math.random() * 500) + 50,
        comments: Math.floor(Math.random() * 30) + 5,
        createdAt: `${Math.floor(Math.random() * 24)} hours ago`,
        aspectRatio: getRandomAspectRatio(),
      }));

      // Create videos data (using groups of 4 images)
      const newVideos = images.slice(12, 16).map((img, index) => {
        const baseImages = images.slice(index * 4, index * 4 + 4);
        return {
          id: parseInt(img.id),
          title: videoTitles[index % videoTitles.length],
          artist: `Animator${index + 1}`,
          prompt: videoPrompts[index % videoPrompts.length],
          images:
            baseImages.length >= 4
              ? baseImages.map(
                  (baseImg, i) =>
                    `${
                      baseImg.download_url
                    }?random=${Date.now()}-video-${index}-${i}`
                )
              : Array(4)
                  .fill(0)
                  .map(
                    (_, i) =>
                      `${
                        img.download_url
                      }?random=${Date.now()}-video-${index}-${i}`
                  ),
          likes: Math.floor(Math.random() * 800) + 200,
          comments: Math.floor(Math.random() * 50) + 10,
          createdAt: `${Math.floor(Math.random() * 12)} hours ago`,
          aspectRatio: getRandomAspectRatio(),
        };
      });

      // Create X posts data
      const newXPosts = images.slice(16, 20).map((img, index) => ({
        id: parseInt(img.id),
        title: xPostTitles[index % xPostTitles.length],
        artist: `TwitterUser${index + 1}`,
        prompt: xPostPrompts[index % xPostPrompts.length],
        image: `${img.download_url}?random=${Date.now()}-x-${index}`,
        likes: Math.floor(Math.random() * 1500) + 100,
        retweets: Math.floor(Math.random() * 500) + 50,
        createdAt: `${Math.floor(Math.random() * 8)} hours ago`,
        aspectRatio: getRandomAspectRatio(),
      }));

      // Update state based on page number
      if (pageNum === 2) {
        setLiveFeedData(newLiveFeed);
        setVideosData(newVideos);
        setXPostsData(newXPosts);
      } else {
        setLiveFeedData((prev) => [...prev, ...newLiveFeed]);
        setVideosData((prev) => [...prev, ...newVideos]);
        setXPostsData((prev) => [...prev, ...newXPosts]);
      }

      setPage(pageNum + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchImages(2);
  }, [fetchImages]);

  // Infinite scroll setup
  useEffect(() => {
    if (loading) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchImages(page);
        }
      },
      { threshold: 1 }
    );

    if (lastElementRef.current) {
      observerRef.current.observe(lastElementRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loading, hasMore, page, fetchImages]);

  const handleSaveImage = (imageUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, "-")}-${Date.now()}.jpg`;
    link.click();
  };

  // Image component with fallback
  const ImageWithFallback: React.FC<{
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
  }> = ({ src, alt, className = "", fallback }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      if (fallback) {
        setImgSrc(fallback);
      } else {
        // Generate a placeholder URL with the same dimensions
        setImgSrc(
          `https://via.placeholder.com/400x300/E5E7EB/9CA3AF?text=Image+Not+Available`
        );
      }
    };

    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
    };

    return (
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        )}
        <img
          src={imgSrc}
          alt={alt}
          className={`${className} ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          onError={handleError}
          onLoad={handleLoad}
        />
        {hasError && !fallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
            Failed to load
          </div>
        )}
      </div>
    );
  };

  const renderLiveFeedGrid = (artworks: ArtworkData[]) => (
    <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 px-8 space-y-6">
      {artworks.map((artwork, index) => (
        <Dialog key={artwork.id}>
          <DialogTrigger className="group">
            <div className="bg-white/80 backdrop-blur-sm overflow-hidden border-3 border-ghibli-orange hover:border-ghibli-orange/80 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-6 break-inside-avoid">
              <div className="relative">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className={`w-full ${
                    artwork.aspectRatio || "h-72"
                  } object-cover transition-all group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1 text-shadow">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-200">by {artwork.artist}</p>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-ghibli-cream-50/95 backdrop-blur-lg border-3 border-ghibli-orange max-w-3xl">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-[500px] object-contain rounded-2xl border-2 border-ghibli-sunset-300"
                />
                <div className="absolute top-4 right-4 flex gap-3">
                  <div className="rounded-full p-3 bg-ghibli-cream-50/90 backdrop-blur-sm cursor-pointer hover:bg-ghibli-cream-50 transition-all border-2 border-ghibli-coral-400 hover:border-ghibli-coral-500">
                    <Heart className="h-6 w-6 text-ghibli-coral-600" />
                  </div>
                  <div
                    className="rounded-full p-3 bg-ghibli-cream-50/90 backdrop-blur-sm cursor-pointer hover:bg-ghibli-cream-50 transition-all border-2 border-ghibli-sunset-400 hover:border-ghibli-sunset-500"
                    onClick={() =>
                      handleSaveImage(artwork.image, artwork.title)
                    }
                  >
                    <Download className="h-6 w-6 text-ghibli-sunset-600" />
                  </div>
                </div>
              </div>

              <div className="bg-ghibli-cream-50/90 backdrop-blur-sm rounded-xl p-6 border-2 border-ghibli-mystic-400">
                <h4 className="text-ghibli-mystic-600 text-xl font-bold mb-3">
                  Prompt:
                </h4>
                <p className="text-ghibli-sunset-700 text-lg leading-relaxed">
                  {artwork.prompt}
                </p>
              </div>

              <Link
                to={`/generate?prompt=${encodeURIComponent(artwork.prompt)}`}
                className="w-full"
              >
                <Button
                  variant="ghibli-filled"
                  size="xxxl"
                  className="w-full text-xl font-bold hover:scale-105 transition-all"
                >
                  Use This Prompt ✨
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );

  const renderVideosGrid = (videos: VideoData[]) => (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
      {videos.map((video) => (
        <Dialog key={video.id}>
          <DialogTrigger className="group">
            <div className="bg-white/80 backdrop-blur-sm overflow-hidden border-3 border-ghibli-orange hover:border-ghibli-orange/80 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="relative">
                <div className="grid grid-cols-2 gap-1 h-80">
                  {video.images.slice(0, 4).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image}
                      alt={`${video.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-all group-hover:scale-105 cursor-pointer"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1 text-shadow">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-200">by {video.artist}</p>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-ghibli-cream-50/95 backdrop-blur-lg border-3 border-ghibli-orange max-w-2xl">
            <ImageSlider
              images={video.images}
              prompt={video.prompt}
              selectedImage={selectedImage}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );

  const renderXPostsGrid = (posts: ArtworkData[]) => (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
      {posts.map((post) => (
        <div key={post.id} className="group">
          <div className="bg-white/80 backdrop-blur-sm overflow-hidden border-3 border-ghibli-orange hover:border-ghibli-orange/80 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="relative">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1 text-shadow">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-200">@{post.artist}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden font-sling bg-gradient-to-b from-ghibli-cream-50 via-ghibli-cream-100 to-ghibli-cream-200 bg-texture-paper">
      {/* Magical Fireflies - Floating around the page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-32 left-16 animate-firefly-float">
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
          className="absolute top-1/3 right-1/4 animate-firefly-float-slow"
          style={{ animationDelay: "2.5s" }}
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse bg-yellow-400 opacity-85 shadow-firefly-small"
            style={{ animationDelay: "1.8s" }}
          ></div>
        </div>
        <div
          className="absolute top-20 left-1/3 animate-firefly-drift"
          style={{ animationDelay: "1s" }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse bg-yellow-300 opacity-80 shadow-firefly"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
        <div
          className="absolute bottom-20 right-1/3 animate-firefly-float"
          style={{ animationDelay: "3.5s" }}
        >
          <div
            className="w-3 h-3 rounded-full animate-pulse bg-yellow-200 opacity-90 shadow-firefly-small"
            style={{ animationDelay: "2.2s" }}
          ></div>
        </div>
      </div>

      {/* Main Content - Full Width */}
      <div className="w-full py-12 relative z-20">
        {/* Simplified Greeting */}
        <div className="text-center mb-12 px-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-ghibli-sunset-600">Hi,</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ghibli-mystic-500 via-ghibli-coral-400 to-ghibli-sunset-500">
              Username
            </span>
          </h1>
        </div>

        {/* Minimalistic Tabs */}
        <Tabs defaultValue="live-feed" className="w-full">
          <TabsList className="grid w-full max-w-xs mx-auto grid-cols-3 mb-8 bg-ghibli-cream-100/50 border border-ghibli-cream-300 rounded-lg h-10">
            <TabsTrigger
              value="live-feed"
              className="data-[state=active]:bg-ghibli-sunset-100 data-[state=active]:text-ghibli-sunset-700 text-ghibli-sunset-600 text-sm font-medium rounded-md h-8"
            >
              feed
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-ghibli-mystic-100 data-[state=active]:text-ghibli-mystic-700 text-ghibli-mystic-600 text-sm font-medium rounded-md h-8"
            >
              videos
            </TabsTrigger>
            <TabsTrigger
              value="x-posts"
              className="data-[state=active]:bg-ghibli-forest-100 data-[state=active]:text-ghibli-forest-700 text-ghibli-forest-600 text-sm font-medium rounded-md h-8"
            >
              posts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live-feed" className="space-y-8 pb-24">
            {renderLiveFeedGrid(liveFeedData)}
            {/* Loading indicator and infinite scroll trigger */}
            <div
              ref={lastElementRef}
              className="w-full flex justify-center py-8"
            >
              {loading && (
                <Loader2 className="h-6 w-6 animate-spin text-ghibli-sunset-500" />
              )}
              {!hasMore && !loading && liveFeedData.length > 0 && (
                <div className="text-center text-ghibli-sunset-600/60 text-sm">
                  End of feed
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-8 pb-24">
            {renderVideosGrid(videosData)}
            <div
              ref={lastElementRef}
              className="w-full flex justify-center py-8"
            >
              {loading && (
                <Loader2 className="h-6 w-6 animate-spin text-ghibli-mystic-500" />
              )}
            </div>
          </TabsContent>

          <TabsContent value="x-posts" className="space-y-8 pb-24">
            {renderXPostsGrid(xPostsData)}
            <div
              ref={lastElementRef}
              className="w-full flex justify-center py-8"
            >
              {loading && (
                <Loader2 className="h-6 w-6 animate-spin text-ghibli-forest-500" />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Sticky Generate Button */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40">
        <Link to="/generate">
          <Button
            variant="ghibli-filled"
            size="xxxl"
            className="text-xl font-bold shadow-2xl hover:scale-105 transition-all"
          >
            <Wand2 className="h-6 w-6 mr-2" />
            Generate
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CommunityFeedPage;
