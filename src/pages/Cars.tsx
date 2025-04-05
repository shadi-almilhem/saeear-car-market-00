
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { CarGrid } from "@/components/CarGrid";
import { SearchBar } from "@/components/SearchBar";
import { mockCars } from "@/data/mockData";
import { Car } from "@/types";
import { toast } from "sonner";

const Cars = () => {
  const { language, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);
  
  useEffect(() => {
    // Simulate API fetch with a timeout
    const timer = setTimeout(() => {
      setCars(mockCars);
      setIsLoading(false);
      toast.success(t("carsLoaded"), {
        description: language === "ar" 
          ? "تم تحميل بيانات السيارات بنجاح"
          : "Car data loaded successfully"
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [language, t]);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center ${language === "ar" ? "rtl" : "ltr"}`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("cars")}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "ar" 
                ? "تصفح مجموعتنا الواسعة من السيارات المتاحة للبيع"
                : "Browse our extensive collection of cars available for sale"}
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        
        <div className="mt-8">
          <CarGrid 
            title={language === "ar" ? "جميع السيارات" : "All Cars"} 
            cars={cars.filter(car => !car.sold)}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Cars;
