
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

export interface Store {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  categories: string[];
  type: 'restaurant' | 'grocery' | 'pharmacy' | 'other';
}

export interface PromoBannerType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  colorClass: string;
}

export interface Order {
  id: string;
  storeName: string;
  status: 'placed' | 'preparing' | 'on-the-way' | 'delivered';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  date: string;
  estimatedDelivery: string;
  deliveryPerson?: {
    name: string;
    phone: string;
    photo: string;
  };
}
