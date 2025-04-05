
import { useState, useEffect } from "react";

const ads = [
  {
    id: 1,
    image: "/placeholder.svg",
    link: "https://example.com/ad1",
    alt: "Advertisement 1"
  },
  {
    id: 2,
    image: "/placeholder.svg",
    link: "https://example.com/ad2",
    alt: "Advertisement 2"
  },
  {
    id: 3,
    image: "/placeholder.svg",
    link: "https://example.com/ad3",
    alt: "Advertisement 3"
  }
];

export function AdBanner() {
  const [currentAd, setCurrentAd] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full bg-gray-100 py-4">
      <div className="container mx-auto">
        <a 
          href={ads[currentAd].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <div className="relative overflow-hidden h-24 md:h-32 rounded-lg">
            <img 
              src={ads[currentAd].image} 
              alt={ads[currentAd].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-gray-800/70 text-white text-xs px-1 py-0.5 rounded">
              إعلان
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
