
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: language === "ar" ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language === "ar" ? "سنقوم بالرد عليك قريبًا" : "We'll get back to you soon",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center ${language === "ar" ? "rtl" : "ltr"}`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contact")}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "ar" 
                ? "نحن هنا للإجابة على جميع استفساراتك"
                : "We're here to answer all your questions"}
            </p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="container mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${language === "ar" ? "rtl" : "ltr"}`}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === "ar" ? "اتصل بنا" : "Get in Touch"}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === "ar" 
                ? "نحن نقدر ملاحظاتك واستفساراتك. املأ النموذج وسنرد عليك في أقرب وقت ممكن."
                : "We value your feedback and inquiries. Fill out the form and we'll get back to you as soon as possible."}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === "ar" ? "البريد الإلكتروني" : "Email"}
                  </h3>
                  <p className="text-gray-600">contact@carmarketplace.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === "ar" ? "الهاتف" : "Phone"}
                  </h3>
                  <p className="text-gray-600">+966 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === "ar" ? "العنوان" : "Address"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "ar" 
                      ? "الرياض، المملكة العربية السعودية"
                      : "Riyadh, Saudi Arabia"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {language === "ar" ? "الاسم" : "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {language === "ar" ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {language === "ar" ? "الرسالة" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === "ar" ? "جاري الإرسال..." : "Sending...") 
                    : (language === "ar" ? "إرسال الرسالة" : "Send Message")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
