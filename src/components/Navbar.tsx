
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Menu, X, User, LogOut, Settings, Car } from "lucide-react";
import { siteSettings } from "@/data/mockData";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Mock state, replace with actual auth logic later

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src={siteSettings.logo}
                alt={siteSettings.siteName}
              />
              <span className="ml-2 text-xl font-bold text-gray-800">{siteSettings.siteName}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 md:space-x-reverse">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link to="/cars" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              {t("cars")}
            </Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              {t("about")}
            </Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              {t("contact")}
            </Link>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-gray-700"
            >
              {language === "ar" ? "EN" : "عربي"}
            </Button>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>
                      <User size={16} />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={language === "ar" ? "end" : "start"} className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2" size={16} />
                    <span>{t("profile")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Car className="mr-2" size={16} />
                    <span>{t("cars")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2" size={16} />
                    <span>{t("settings")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2" size={16} />
                    <span>{t("logout")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex space-x-2 space-x-reverse">
                <Button variant="ghost" asChild>
                  <Link to="/login">{t("login")}</Link>
                </Button>
                <Button variant="default" className="bg-primary" asChild>
                  <Link to="/register">{t("register")}</Link>
                </Button>
              </div>
            )}
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden bg-white ${language === "ar" ? "rtl" : "ltr"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/cars"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("cars")}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            {!isLoggedIn && (
              <div className="space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    {t("login")}
                  </Link>
                </Button>
                <Button variant="default" className="bg-primary w-full" asChild>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    {t("register")}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
