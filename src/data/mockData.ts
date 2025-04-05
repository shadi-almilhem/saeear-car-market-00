
import { Car, Review, SiteSettings, User } from "../types";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "أحمد محمد",
    email: "ahmed@example.com",
    emailVerified: true,
    mobileNo: "+966501234567",
    profilePicture: "/placeholder.svg",
    city: "الرياض",
    country: "السعودية",
    role: "seller"
  },
  {
    id: 2,
    name: "سارة علي",
    email: "sara@example.com",
    emailVerified: true,
    mobileNo: "+966507654321",
    profilePicture: "/placeholder.svg",
    city: "جدة",
    country: "السعودية",
    role: "seller"
  },
  {
    id: 3,
    name: "خالد عبدالله",
    email: "khalid@example.com",
    emailVerified: true,
    mobileNo: "+966509876543",
    profilePicture: "/placeholder.svg",
    city: "الدمام",
    country: "السعودية",
    role: "seller"
  }
];

export const mockCars: Car[] = [
  {
    id: 1,
    userId: 1,
    brand: "تويوتا",
    model: "كامري",
    year: 2022,
    price: 120000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1534828894970-9f3e085ca19f.jpg",
      "https://nomorecopyright.com/images/car/photo-1605556443921-51a82b6f823c.jpg"
    ],
    description: "سيارة تويوتا كامري موديل 2022 بحالة ممتازة، قليلة الاستخدام",
    sold: false,
    color: "أبيض",
    country: "السعودية",
    city: "الرياض",
    createdAt: "2025-03-15T10:30:00"
  },
  {
    id: 2,
    userId: 2,
    brand: "نيسان",
    model: "باترول",
    year: 2021,
    price: 250000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1541899481282-d53bffe3c35d.jpg",
      "https://nomorecopyright.com/images/car/photo-1573950940509-d924ee3fd345.jpg"
    ],
    description: "نيسان باترول فل كامل، بدون حوادث، صيانة دورية",
    sold: false,
    color: "أسود",
    country: "السعودية",
    city: "جدة",
    createdAt: "2025-03-20T14:15:00"
  },
  {
    id: 3,
    userId: 1,
    brand: "لكزس",
    model: "ES",
    year: 2023,
    price: 280000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1583121274602-3e2820c69888.jpg",
      "https://nomorecopyright.com/images/car/photo-1494976388531-d1058494cdd8.jpg"
    ],
    description: "لكزس ES موديل 2023، فل أوبشن، تحت الضمان",
    sold: false,
    color: "فضي",
    country: "السعودية",
    city: "الرياض",
    createdAt: "2025-03-25T09:45:00"
  },
  {
    id: 4,
    userId: 3,
    brand: "هوندا",
    model: "أكورد",
    year: 2022,
    price: 130000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1568605117036-5fe5e7bab0b7.jpg",
      "https://nomorecopyright.com/images/car/photo-1603584173870-7f23fdae1b7a.jpg"
    ],
    description: "هوندا أكورد 2022، ماشي 30 ألف كم فقط، بحالة الوكالة",
    sold: false,
    color: "أزرق",
    country: "السعودية",
    city: "الدمام",
    createdAt: "2025-03-28T16:20:00"
  },
  {
    id: 5,
    userId: 2,
    brand: "مرسيدس",
    model: "E-Class",
    year: 2021,
    price: 350000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1553440569-bcc63803a83d.jpg",
      "https://nomorecopyright.com/images/car/photo-1525609004556-c46c7d6cf023.jpg"
    ],
    description: "مرسيدس E-Class موديل 2021، فل كامل، بحالة ممتازة",
    sold: false,
    color: "أسود",
    country: "السعودية",
    city: "جدة",
    createdAt: "2025-04-01T11:10:00"
  },
  {
    id: 6,
    userId: 1,
    brand: "بي إم دبليو",
    model: "X5",
    year: 2023,
    price: 420000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1551952238-2a1b84298735.jpg",
      "https://nomorecopyright.com/images/car/photo-1592198084033-aade902d1aae.jpg"
    ],
    description: "بي إم دبليو X5 موديل 2023، فل كامل، تحت الضمان",
    sold: false,
    color: "أبيض",
    country: "السعودية",
    city: "الرياض",
    createdAt: "2025-04-03T13:25:00"
  },
  {
    id: 7,
    userId: 3,
    brand: "هيونداي",
    model: "سوناتا",
    year: 2022,
    price: 95000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1550355291-bbee04a92027.jpg",
      "https://nomorecopyright.com/images/car/photo-1502877338535-766e1452684a.jpg"
    ],
    description: "هيونداي سوناتا 2022، بحالة ممتازة، سيرفس منتظم",
    sold: true,
    color: "رمادي",
    country: "السعودية",
    city: "الدمام",
    createdAt: "2025-02-15T10:30:00"
  },
  {
    id: 8,
    userId: 2,
    brand: "فورد",
    model: "إكسبلورر",
    year: 2021,
    price: 160000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1533473359331-0135ef1b58bf.jpg",
      "https://nomorecopyright.com/images/car/photo-1546614042-7df3c24c9e5d.jpg"
    ],
    description: "فورد إكسبلورر 2021، 7 راكب، بحالة ممتازة",
    sold: true,
    color: "أحمر",
    country: "السعودية",
    city: "جدة",
    createdAt: "2025-02-20T14:15:00"
  },
  {
    id: 9,
    userId: 1,
    brand: "شيفروليه",
    model: "تاهو",
    year: 2020,
    price: 180000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1549317661-bd32c8ce0db2.jpg",
      "https://nomorecopyright.com/images/car/photo-1533106418989-88406c7cc8ca.jpg"
    ],
    description: "شيفروليه تاهو 2020، بحالة جيدة جداً، صيانة دورية",
    sold: true,
    color: "أسود",
    country: "السعودية",
    city: "الرياض",
    createdAt: "2025-02-25T09:45:00"
  },
  {
    id: 10,
    userId: 3,
    brand: "كيا",
    model: "كيا K5",
    year: 2022,
    price: 110000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1547245324-59b6be4ef826.jpg",
      "https://nomorecopyright.com/images/car/photo-1494905998402-395d579af36f.jpg"
    ],
    description: "كيا K5 موديل 2022، بحالة ممتازة، ماشي 40 ألف كم",
    sold: true,
    color: "رمادي",
    country: "السعودية",
    city: "الدمام",
    createdAt: "2025-03-01T16:20:00"
  },
  {
    id: 11,
    userId: 2,
    brand: "جيب",
    model: "جراند شيروكي",
    year: 2021,
    price: 200000,
    images: [
      "https://nomorecopyright.com/images/car/photo-1552519507-da3b142c6e3d.jpg",
      "https://nomorecopyright.com/images/car/photo-1507553532144-b9df5e38c8d1.jpg"
    ],
    description: "جيب جراند شيروكي 2021، فل أوبشن، بحالة ممتازة",
    sold: true,
    color: "أخضر",
    country: "السعودية",
    city: "جدة",
    createdAt: "2025-03-05T11:10:00"
  }
];

export const mockReviews: Review[] = [
  {
    id: 1,
    userId: 4,
    title: "تجربة رائعة",
    detail: "وجدت سيارة أحلامي بسرعة وسهولة. المنصة سهلة الاستخدام والبائع كان متعاون جداً",
    rating: 5,
    userName: "محمد علي",
    userImage: "/placeholder.svg"
  },
  {
    id: 2,
    userId: 5,
    title: "خدمة ممتازة",
    detail: "أشكر القائمين على هذه المنصة، وفرت علي الوقت والجهد في البحث عن سيارة مناسبة",
    rating: 4,
    userName: "فاطمة محمد",
    userImage: "/placeholder.svg"
  },
  {
    id: 3,
    userId: 6,
    title: "تجربة مميزة",
    detail: "منصة رائعة تتيح التواصل المباشر مع البائعين، وفرت علي الكثير من الوقت والجهد",
    rating: 5,
    userName: "عبدالله ناصر",
    userImage: "/placeholder.svg"
  }
];

export const siteSettings: SiteSettings = {
  siteName: "سيارة تك",
  logo: "/placeholder.svg",
  favicon: "/placeholder.svg",
  socialLinks: {
    facebook: "https://facebook.com/cartech",
    instagram: "https://instagram.com/cartech",
    whatsapp: "+966500000000"
  },
  carouselImages: [
    {
      image: "/placeholder.svg",
      text: "اعثر على سيارة أحلامك الآن"
    },
    {
      image: "/placeholder.svg",
      text: "أفضل العروض بانتظارك"
    },
    {
      image: "/placeholder.svg",
      text: "تواصل مباشرة مع البائعين"
    }
  ]
};
