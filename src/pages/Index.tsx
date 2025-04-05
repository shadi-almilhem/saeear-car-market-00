
import { HeroCarousel } from "@/components/HeroCarousel";
import { AdBanner } from "@/components/AdBanner";
import { SearchBar } from "@/components/SearchBar";
import { CarGrid } from "@/components/CarGrid";
import { ReviewsSection } from "@/components/ReviewsSection";
import { mockCars } from "@/data/mockData";
import { useLanguage } from "@/hooks/use-language";
import { useState, useEffect } from "react";
import { Car } from "@/types";

const Index = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);
  
  useEffect(() => {
    // Simulate API fetch with a timeout
    const timer = setTimeout(() => {
      setCars(mockCars);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter cars for different sections
  const recentCars = [...(isLoading ? [] : cars)]
    .filter(car => !car.sold)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6);
    
  const featuredCars = [...(isLoading ? [] : cars)]
    .filter(car => !car.sold)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  const soldCars = [...(isLoading ? [] : cars)]
    .filter(car => car.sold)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <SearchBar />
      <AdBanner />
      <CarGrid 
        title={t("latestCars")} 
        cars={recentCars}
        viewAllLink="/cars"
        isLoading={isLoading}
      />
      <div className="bg-gray-100 py-10">
        <CarGrid 
          title={t("featuredCars")} 
          cars={featuredCars}
          isLoading={isLoading}
        />
      </div>
      <CarGrid 
        title={t("recentlySold")} 
        cars={soldCars}
        isLoading={isLoading}
      />
      <ReviewsSection />
    </div>
  );
};

export default Index;
