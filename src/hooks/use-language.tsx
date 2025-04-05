
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "../types";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<string, Record<Language, string>> = {
  "home": {
    "ar": "الرئيسية",
    "en": "Home"
  },
  "search": {
    "ar": "بحث",
    "en": "Search"
  },
  "cars": {
    "ar": "السيارات",
    "en": "Cars"
  },
  "about": {
    "ar": "من نحن",
    "en": "About Us"
  },
  "contact": {
    "ar": "اتصل بنا",
    "en": "Contact Us"
  },
  "profile": {
    "ar": "الملف الشخصي",
    "en": "Profile"
  },
  "logout": {
    "ar": "تسجيل الخروج",
    "en": "Logout"
  },
  "login": {
    "ar": "تسجيل الدخول",
    "en": "Login"
  },
  "register": {
    "ar": "تسجيل جديد",
    "en": "Register"
  },
  "searchPlaceholder": {
    "ar": "ابحث عن ماركة، موديل، سنة...",
    "en": "Search brand, model, year..."
  },
  "latestCars": {
    "ar": "أحدث السيارات",
    "en": "Latest Cars"
  },
  "featuredCars": {
    "ar": "سيارات مميزة",
    "en": "Featured Cars"
  },
  "recentlySold": {
    "ar": "بيعت مؤخراً",
    "en": "Recently Sold"
  },
  "customerReviews": {
    "ar": "آراء العملاء",
    "en": "Customer Reviews"
  },
  "viewDetails": {
    "ar": "عرض التفاصيل",
    "en": "View Details"
  },
  "contactSeller": {
    "ar": "تواصل مع البائع",
    "en": "Contact Seller"
  },
  "year": {
    "ar": "سنة",
    "en": "Year"
  },
  "price": {
    "ar": "السعر",
    "en": "Price"
  },
  "location": {
    "ar": "الموقع",
    "en": "Location"
  },
  "brand": {
    "ar": "العلامة التجارية",
    "en": "Brand"
  },
  "model": {
    "ar": "الموديل",
    "en": "Model"
  },
  "color": {
    "ar": "اللون",
    "en": "Color"
  },
  "description": {
    "ar": "الوصف",
    "en": "Description"
  },
  "sar": {
    "ar": "ريال",
    "en": "SAR"
  },
  "searchForCar": {
    "ar": "ابحث عن سيارتك المناسبة",
    "en": "Find your perfect car"
  },
  "viewAll": {
    "ar": "عرض الكل",
    "en": "View All"
  },
  "followUs": {
    "ar": "تابعنا",
    "en": "Follow Us"
  },
  "rights": {
    "ar": "جميع الحقوق محفوظة",
    "en": "All rights reserved"
  },
  "sold": {
    "ar": "تم البيع",
    "en": "SOLD"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
