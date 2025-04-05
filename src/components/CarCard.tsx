
import { Car } from "@/types";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { language, t } = useLanguage();
  
  return (
    <div className={`car-card ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="car-card-image-container">
        <img 
          src={car.images[0]} 
          alt={`${car.brand} ${car.model}`} 
          className="car-card-image"
        />
        {car.sold && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge className="bg-primary text-lg px-4 py-2">{t("sold")}</Badge>
          </div>
        )}
      </div>
      <div className="car-card-content">
        <h3 className="car-card-title">{car.brand} {car.model}</h3>
        <p className="car-card-price">
          {car.price.toLocaleString()} {t("sar")}
        </p>
        <div className="car-card-details">
          <span>{car.year}</span>
          <span>{car.color}</span>
        </div>
        <div className="car-card-location">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <span>{car.city}, {car.country}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 mr-2"
            asChild
          >
            <Link to={`/cars/${car.id}`}>{t("viewDetails")}</Link>
          </Button>
          <Button 
            variant="default"
            size="sm"
            className="flex-1 bg-primary"
            disabled={car.sold}
            asChild
          >
            <Link to={`/contact-seller/${car.userId}?carId=${car.id}`}>
              {t("contactSeller")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
