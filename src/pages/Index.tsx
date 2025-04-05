
import { HeroCarousel } from "@/components/HeroCarousel";
import { AdBanner } from "@/components/AdBanner";
import { SearchBar } from "@/components/SearchBar";
import { CarGrid } from "@/components/CarGrid";
import { ReviewsSection } from "@/components/ReviewsSection";
import { mockCars } from "@/data/mockData";
import { useLanguage } from "@/hooks/use-language";

const Index = () => {
  const { t } = useLanguage();
  
  // Filter cars for different sections
  const recentCars = [...mockCars]
    .filter(car => !car.sold)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6);
    
  const featuredCars = [...mockCars]
    .filter(car => !car.sold)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  const soldCars = [...mockCars]
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
      />
      <div className="bg-gray-100 py-10">
        <CarGrid 
          title={t("featuredCars")} 
          cars={featuredCars}
        />
      </div>
      <CarGrid 
        title={t("recentlySold")} 
        cars={soldCars}
      />
      <ReviewsSection />
    </div>
  );
};

export default Index;
