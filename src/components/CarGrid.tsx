
import { CarCard } from "./CarCard";
import { Car } from "@/types";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface CarGridProps {
  title: string;
  cars: Car[];
  viewAllLink?: string;
  isLoading?: boolean;
}

export function CarGrid({ title, cars, viewAllLink, isLoading = false }: CarGridProps) {
  const { language, t } = useLanguage();
  
  return (
    <div className={`py-10 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {viewAllLink && (
            <Button variant="link" className="text-primary" asChild>
              <Link to={viewAllLink}>{t("viewAll")}</Link>
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="car-card">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="mt-4 flex justify-between">
                    <Skeleton className="h-9 w-[48%]" />
                    <Skeleton className="h-9 w-[48%]" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual car cards
            cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
