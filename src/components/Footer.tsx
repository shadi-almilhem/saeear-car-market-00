
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone } from "lucide-react";
import { siteSettings } from "@/data/mockData";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className={`bg-gray-900 text-white pt-12 pb-6 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src={siteSettings.logo}
                alt={siteSettings.siteName}
                className="h-10 w-auto brightness-200"
              />
              <span className="ml-2 text-xl font-bold">{siteSettings.siteName}</span>
            </Link>
            <p className="text-gray-400 mb-4">
              {language === "ar" 
                ? "المنصة الأولى لبيع وشراء السيارات بشكل مباشر بين البائع والمشتري"
                : "The premier platform for buying and selling cars directly between sellers and buyers"}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <a
                href={siteSettings.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/40 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteSettings.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/40 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://wa.me/${siteSettings.socialLinks.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 p-2 rounded-full hover:bg-primary/40 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-white transition-colors">
                  {t("cars")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            &copy; {year} {siteSettings.siteName}. {t("rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
