"use client";
import React, { useState } from "react";
import { Download, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface ImageSliderProps {
  images: string[];
  prompt: string;
  selectedImage?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  prompt,
  selectedImage = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImage);

  const handleSaveImage = () => {
    const imageUrl = images[currentIndex];

    // Create download link
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `ghibli-art-${Date.now()}.jpg`;
    link.click();
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return images ? (
    <div className="flex flex-col gap-6">
      <div className="relative flex flex-row items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`Ghibli Art ${currentIndex}`}
            className="w-full h-[400px] cursor-pointer object-contain transition-all hover:scale-105 rounded-2xl border-2 border-ghibli-sunset-300"
          />
        </div>

        <div
          className="absolute z-30 h-full w-full flex flex-col justify-between p-6 rounded-2xl"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.0) 60%)",
          }}
        >
          <div className="self-end flex gap-3">
            <div
              className="rounded-full p-3 bg-ghibli-cream-50/80 backdrop-blur-sm cursor-pointer hover:bg-ghibli-cream-50/90 transition-all border-2 border-ghibli-sunset-400 hover:border-ghibli-sunset-500"
              onClick={handleSaveImage}
            >
              <Download className="h-6 w-6 text-ghibli-sunset-600" />
            </div>
            <div className="p-3 rounded-full bg-ghibli-cream-50/80 backdrop-blur-sm cursor-pointer hover:bg-ghibli-cream-50/90 transition-all border-2 border-ghibli-coral-400 hover:border-ghibli-coral-500">
              <Trash2 className="h-6 w-6 text-ghibli-coral-600" />
            </div>
          </div>
          <div className="bg-ghibli-cream-50/90 backdrop-blur-sm rounded-xl p-4 border-2 border-ghibli-mystic-400">
            <h4 className="text-ghibli-mystic-600 text-lg font-bold mb-2 flex items-center">
              Prompt:
            </h4>
            <p className="text-ghibli-sunset-700 text-lg font-semibold leading-relaxed">
              {prompt}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-row bg-ghibli-cream-50/80 backdrop-blur-sm rounded-2xl p-6 justify-between border-3 border-ghibli-sunset-400">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-[22%] h-auto cursor-pointer object-cover transition-all hover:scale-105 rounded-xl border-2 ${
              currentIndex === index
                ? "border-ghibli-mystic-500 shadow-lg shadow-ghibli-mystic-200"
                : "border-ghibli-sunset-300"
            }`}
            style={{ aspectRatio: "1/1" }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
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
  ) : (
    <div className="text-ghibli-sunset-700 text-xl font-semibold text-center py-8">
      Loading artwork...
    </div>
  );
};

export default ImageSlider;
