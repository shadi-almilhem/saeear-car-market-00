
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { language, t } = useLanguage();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement search functionality later
    console.log("Searching for:", searchTerm);
  };
  
  return (
    <div className={`bg-gray-100 py-12 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            {t("searchForCar")}
          </h2>
          <form onSubmit={handleSearch} className="flex w-full">
            <div className="relative flex-grow">
              <Search className={`absolute ${language === "ar" ? "right-3" : "left-3"} top-1/2 transform -translate-y-1/2 text-gray-500`} size={20} />
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className={`w-full ${language === "ar" ? "pr-10" : "pl-10"} py-6 rounded-l-lg border-r-0`}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 py-6 px-8 rounded-r-lg"
            >
              {t("search")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
