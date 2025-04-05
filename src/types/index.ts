
export interface Car {
  id: number;
  userId: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  description: string;
  sold: boolean;
  color: string;
  country: string;
  city: string;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  emailVerified: boolean;
  mobileNo: string;
  profilePicture?: string;
  city: string;
  country: string;
  role: 'user' | 'seller' | 'admin';
}

export interface Review {
  id: number;
  userId: number;
  title: string;
  detail: string;
  image?: string;
  rating: number;
  userName: string;
  userImage?: string;
}

export interface SiteSettings {
  siteName: string;
  logo: string;
  favicon: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  carouselImages: {
    image: string;
    text: string;
  }[];
}

export type Language = 'en' | 'ar';
