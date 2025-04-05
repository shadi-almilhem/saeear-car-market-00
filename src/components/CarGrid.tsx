
import { CarCard } from "./CarCard";
import { Car } from "@/types";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "react-router-dom";

interface CarGridProps {
  title: string;
  cars: Car[];
  viewAllLink?: string;
}

export function CarGrid({ title, cars, viewAllLink }: CarGridProps) {
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
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
