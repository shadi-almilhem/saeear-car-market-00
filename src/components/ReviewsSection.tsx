
import { useState, useEffect } from "react";
import { mockReviews } from "@/data/mockData";
import { useLanguage } from "@/hooks/use-language";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ReviewsSection() {
  const { language, t } = useLanguage();
  const [activeReview, setActiveReview] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev === mockReviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`bg-gray-100 py-16 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t("customerReviews")}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {mockReviews.map((review, index) => (
            <div
              key={review.id}
              className={`transition-opacity duration-500 ${
                index === activeReview ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={i < review.rating ? "#FFC107" : "none"}
                      color={i < review.rating ? "#FFC107" : "#e2e8f0"}
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl text-center text-gray-700 mb-6">
                  "{review.detail}"
                </blockquote>
                
                <div className="flex justify-center items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={review.userImage} alt={review.userName} />
                    <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">{review.userName}</p>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-6">
            {mockReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === activeReview ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
