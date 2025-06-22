import React, { useState } from "react";
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
} from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

const CommunityFeedPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Live Feed Data - Single images
  const liveFeedData = [
    {
      id: 1,
      title: "Floating Castle in the Clouds",
      artist: "ArtistName1",
      prompt:
        "A magical floating castle surrounded by fluffy clouds, Studio Ghibli style with soft pastels and dreamy atmosphere",
      image: "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Castle",
      likes: 234,
      comments: 18,
      createdAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Forest Spirit Guardian",
      artist: "ArtistName2",
      prompt:
        "Ancient forest spirit with glowing eyes protecting a mystical woodland, emerald greens and golden light filtering through trees",
      image: "https://via.placeholder.com/400x300/059669/FFFFFF?text=Spirit",
      likes: 189,
      comments: 12,
      createdAt: "4 hours ago",
    },
    {
      id: 3,
      title: "Dragon's Valley",
      artist: "ArtistName3",
      prompt:
        "A peaceful valley where dragons and humans live in harmony, warm sunset colors with magical sparkles in the air",
      image: "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Dragon",
      likes: 156,
      comments: 9,
      createdAt: "6 hours ago",
    },
    {
      id: 4,
      title: "Magical Train Station",
      artist: "ArtistName4",
      prompt:
        "A whimsical train station where spirits board trains to other worlds, Victorian architecture with mystical elements",
      image: "https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Train",
      likes: 298,
      comments: 24,
      createdAt: "8 hours ago",
    },
    {
      id: 5,
      title: "Sky Pirates Airship",
      artist: "ArtistName5",
      prompt:
        "Steampunk airship sailing through cotton candy clouds with brave sky pirates aboard, brass and copper details gleaming",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Airship",
      likes: 345,
      comments: 31,
      createdAt: "1 day ago",
    },
    {
      id: 6,
      title: "Underwater Palace",
      artist: "ArtistName6",
      prompt:
        "An enchanted underwater palace with coral gardens and friendly sea creatures, bioluminescent blues and teals",
      image: "https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Palace",
      likes: 412,
      comments: 28,
      createdAt: "12 hours ago",
    },
    {
      id: 7,
      title: "Moonlit Garden",
      artist: "ArtistName7",
      prompt:
        "A serene garden bathed in moonlight with glowing flowers and gentle spirits",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Garden",
      likes: 267,
      comments: 15,
      createdAt: "3 hours ago",
    },
    {
      id: 8,
      title: "Crystal Cave Adventure",
      artist: "ArtistName8",
      prompt:
        "Explorers discovering a magical crystal cave with rainbow reflections",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Cave",
      likes: 198,
      comments: 21,
      createdAt: "5 hours ago",
    },
  ];

  // Videos Data - Multiple images for slider
  const videosData = [
    {
      id: 1,
      title: "Floating Castle Animation",
      artist: "AnimatorName1",
      prompt: "Animated sequence of a floating castle moving through clouds",
      images: [
        "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Castle+1",
        "https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Castle+2",
        "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Castle+3",
        "https://via.placeholder.com/400x300/A855F7/FFFFFF?text=Castle+4",
      ],
      likes: 534,
      comments: 48,
      createdAt: "1 hour ago",
    },
    {
      id: 2,
      title: "Forest Spirit Dance",
      artist: "AnimatorName2",
      prompt: "Magical forest spirits dancing in the moonlight",
      images: [
        "https://via.placeholder.com/400x300/059669/FFFFFF?text=Dance+1",
        "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Dance+2",
        "https://via.placeholder.com/400x300/34D399/FFFFFF?text=Dance+3",
        "https://via.placeholder.com/400x300/6EE7B7/FFFFFF?text=Dance+4",
      ],
      likes: 423,
      comments: 35,
      createdAt: "3 hours ago",
    },
  ];

  // X-Posts Data - Twitter-style posts
  const xPostsData = [
    {
      id: 1,
      title: "Amazing Ghibli AI Art!",
      artist: "TwitterUser1",
      prompt: "Just generated this stunning piece using AI! #GhibliArt #AI",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Tweet+Art",
      likes: 856,
      retweets: 234,
      createdAt: "30 minutes ago",
    },
    {
      id: 2,
      title: "My first AI creation",
      artist: "TwitterUser2",
      prompt: "Can't believe I made this with AI! Studio Ghibli vibes 🎨",
      image: "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Tweet+2",
      likes: 445,
      retweets: 128,
      createdAt: "2 hours ago",
    },
    {
      id: 3,
      title: "AI Art Revolution",
      artist: "TwitterUser3",
      prompt: "The future of art is here! #AIArt #StudioGhibli #Future",
      image: "https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Tweet+3",
      likes: 1203,
      retweets: 567,
      createdAt: "4 hours ago",
    },
  ];

  const handleSaveImage = (imageUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, "-")}-${Date.now()}.jpg`;
    link.click();
  };

  const renderLiveFeedGrid = (artworks: typeof liveFeedData) => (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
      {artworks.map((artwork) => (
        <Dialog key={artwork.id}>
          <DialogTrigger className="group">
            <div className="bg-white/80 backdrop-blur-sm overflow-hidden border-3 border-ghibli-orange hover:border-ghibli-orange/80 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-72 object-cover transition-all group-hover:scale-105"
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
                <img
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

              <Button
                variant="ghibli-filled"
                size="xxxl"
                className="w-full text-xl font-bold hover:scale-105 transition-all"
              >
                Use This Prompt ✨
                <Star className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );

  const renderVideosGrid = (videos: typeof videosData) => (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
      {videos.map((video) => (
        <Dialog key={video.id}>
          <DialogTrigger className="group">
            <div className="bg-white/80 backdrop-blur-sm overflow-hidden border-3 border-ghibli-orange hover:border-ghibli-orange/80 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="relative">
                <div className="grid grid-cols-2 gap-1 h-72">
                  {video.images.slice(0, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${video.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-all group-hover:scale-105"
                      onClick={() => setSelectedImage(index)}
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

  const renderXPostsGrid = (posts: typeof xPostsData) => (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
      {posts.map((post) => (
        <div key={post.id} className="group">
          <div className="bg-white/80 backdrop-blur-sm overflow-hidden border-3 border-ghibli-orange hover:border-ghibli-orange/80 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="relative">
              <img
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

        {/* Smaller Tabs */}
        <Tabs defaultValue="live-feed" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white/60 backdrop-blur-sm border-2 border-ghibli-orange rounded-2xl h-12">
            <TabsTrigger
              value="live-feed"
              className="data-[state=active]:bg-ghibli-sunset-500 data-[state=active]:text-white text-ghibli-sunset-700 font-semibold rounded-xl h-8"
            >
              live-feed
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-ghibli-mystic-500 data-[state=active]:text-white text-ghibli-mystic-700 font-semibold rounded-xl h-8"
            >
              videos
            </TabsTrigger>
            <TabsTrigger
              value="x-posts"
              className="data-[state=active]:bg-ghibli-forest-500 data-[state=active]:text-white text-ghibli-forest-700 font-semibold rounded-xl h-8"
            >
              x-posts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live-feed" className="space-y-8">
            {renderLiveFeedGrid(liveFeedData)}
          </TabsContent>

          <TabsContent value="videos" className="space-y-8">
            {renderVideosGrid(videosData)}
          </TabsContent>

          <TabsContent value="x-posts" className="space-y-8">
            {renderXPostsGrid(xPostsData)}
          </TabsContent>
        </Tabs>

        {/* Generate Button */}
        <div className="text-center mt-16 px-8">
          <Button
            variant="ghibli-outline"
            size="xxxl"
            className="text-xl font-bold"
          >
            🎨 Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedPage;
