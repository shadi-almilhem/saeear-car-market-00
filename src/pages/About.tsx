
import { useLanguage } from "@/hooks/use-language";
import { siteSettings } from "@/data/mockData";

const About = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center ${language === "ar" ? "rtl" : "ltr"}`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("about")}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "ar" 
                ? "المنصة الأولى لبيع وشراء السيارات بشكل مباشر بين البائع والمشتري"
                : "The premier platform for buying and selling cars directly between sellers and buyers"}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${language === "ar" ? "rtl" : "ltr"}`}>
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === "ar" ? "من نحن" : "Who We Are"}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === "ar" 
                ? "نحن منصة رائدة في مجال بيع وشراء السيارات، نهدف إلى توفير تجربة سلسة وآمنة لجميع المستخدمين. نؤمن بأن عملية شراء أو بيع السيارة يجب أن تكون بسيطة وخالية من التعقيدات."
                : "We are a leading platform in the automotive sales industry, aiming to provide a seamless and secure experience for all users. We believe that the process of buying or selling a car should be simple and hassle-free."}
            </p>
            <p className="text-gray-700 mb-4">
              {language === "ar" 
                ? "تأسست منصتنا بهدف ربط البائعين والمشترين بشكل مباشر، مما يوفر الوقت والجهد ويضمن أفضل الأسعار للطرفين."
                : "Our platform was established with the goal of connecting sellers and buyers directly, saving time and effort while ensuring the best prices for both parties."}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://nomorecopyright.com/explore/all-images/car/car-1.jpg" 
              alt="Car dealership" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className={`mt-16 ${language === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === "ar" ? "منصة موثوقة" : "Trusted Platform"}
              </h3>
              <p className="text-gray-700">
                {language === "ar" 
                  ? "نوفر منصة آمنة وموثوقة للتعاملات، مع التحقق من جميع المستخدمين لضمان تجربة خالية من المخاطر."
                  : "We provide a secure and trusted platform for transactions, with verification of all users to ensure a risk-free experience."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === "ar" ? "خيارات متنوعة" : "Wide Selection"}
              </h3>
              <p className="text-gray-700">
                {language === "ar" 
                  ? "نقدم مجموعة واسعة من السيارات بمختلف الماركات والموديلات والأسعار لتلبية احتياجات جميع العملاء."
                  : "We offer a wide range of cars with various brands, models, and prices to meet the needs of all customers."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === "ar" ? "تواصل مباشر" : "Direct Communication"}
              </h3>
              <p className="text-gray-700">
                {language === "ar" 
                  ? "نتيح للمشترين التواصل المباشر مع البائعين، مما يسهل التفاوض والحصول على أفضل العروض."
                  : "We allow buyers to communicate directly with sellers, facilitating negotiation and obtaining the best offers."}
              </p>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 text-center ${language === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "ar" ? "تواصل معنا" : "Contact Us"}
          </h2>
          <p className="text-gray-700 mb-6">
            {language === "ar" 
              ? "هل لديك أي استفسارات أو ملاحظات؟ نحن هنا للمساعدة!"
              : "Do you have any questions or feedback? We're here to help!"}
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href={siteSettings.socialLinks.facebook} 
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
