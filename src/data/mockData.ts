
import { Service, Store, PromoBannerType, Order } from '../types';
import { 
  Utensils, 
  ShoppingCart, 
  Pill, 
  Gift, 
  Flower, 
  Dog 
} from 'lucide-react';

export const services: Service[] = [
  {
    id: '1',
    title: 'مطاعم',
    description: 'اطلب من مطاعمك المفضلة',
    icon: 'Utensils',
    color: 'bg-brand-primary',
    link: '/restaurants'
  },
  {
    id: '2',
    title: 'بقالة',
    description: 'توصيل البقالة في نفس اليوم',
    icon: 'ShoppingCart',
    color: 'bg-brand-secondary',
    link: '/grocery'
  },
  {
    id: '3',
    title: 'صيدلية',
    description: 'أدوية ومنتجات صحية',
    icon: 'Pill',
    color: 'bg-brand-accent',
    link: '/pharmacy'
  },
  {
    id: '4',
    title: 'هدايا',
    description: 'هدايا مميزة لكل المناسبات',
    icon: 'Gift',
    color: 'bg-rose-500',
    link: '/gifts'
  },
  {
    id: '5',
    title: 'زهور',
    description: 'باقات طازجة وجميلة',
    icon: 'Flower',
    color: 'bg-emerald-500',
    link: '/flowers'
  },
  {
    id: '6',
    title: 'مستلزمات الحيوانات',
    description: 'كل ما يحتاجه حيوانك الأليف',
    icon: 'Dog',
    color: 'bg-amber-500',
    link: '/pets'
  }
];

export const iconComponents = {
  Utensils,
  ShoppingCart,
  Pill,
  Gift,
  Flower,
  Dog
};

export const stores: Store[] = [
  {
    id: '1',
    name: 'البيك',
    image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=736&auto=format&fit=crop',
    rating: 4.8,
    deliveryTime: '25-35 دقيقة',
    deliveryFee: '10 ريال',
    categories: ['وجبات سريعة', 'دجاج'],
    type: 'restaurant'
  },
  {
    id: '2',
    name: 'كودو',
    image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=743&auto=format&fit=crop',
    rating: 4.5,
    deliveryTime: '30-40 دقيقة',
    deliveryFee: '12 ريال',
    categories: ['وجبات سريعة', 'برجر'],
    type: 'restaurant'
  },
  {
    id: '3',
    name: 'هرفي',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=871&auto=format&fit=crop',
    rating: 4.3,
    deliveryTime: '35-45 دقيقة',
    deliveryFee: '8 ريال',
    categories: ['وجبات سريعة', 'برجر', 'بيتزا'],
    type: 'restaurant'
  },
  {
    id: '4',
    name: 'المزرعة',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=774&auto=format&fit=crop',
    rating: 4.7,
    deliveryTime: '20-30 دقيقة',
    deliveryFee: '15 ريال',
    categories: ['بقالة', 'خضار وفواكه'],
    type: 'grocery'
  },
  {
    id: '5',
    name: 'بنده',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=774&auto=format&fit=crop',
    rating: 4.6,
    deliveryTime: '30-45 دقيقة',
    deliveryFee: 'مجاناً',
    categories: ['بقالة', 'منتجات غذائية'],
    type: 'grocery'
  },
  {
    id: '6',
    name: 'النهدي',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=869&auto=format&fit=crop',
    rating: 4.9,
    deliveryTime: '20-35 دقيقة',
    deliveryFee: 'مجاناً للطلبات فوق 100 ريال',
    categories: ['صيدلية', 'أدوية'],
    type: 'pharmacy'
  }
];

export const promoBanners: PromoBannerType[] = [
  {
    id: '1',
    title: 'خصم 25% على أول طلب',
    description: 'استخدم كود: WELCOME25 عند الدفع',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=870&auto=format&fit=crop',
    ctaText: 'اطلب الآن',
    ctaLink: '/restaurants',
    colorClass: 'bg-gradient-to-r from-brand-primary to-brand-dark'
  },
  {
    id: '2',
    title: 'توصيل مجاني للصيدليات',
    description: 'للطلبات فوق 50 ريال',
    imageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=840&auto=format&fit=crop',
    ctaText: 'تصفح الصيدليات',
    ctaLink: '/pharmacy',
    colorClass: 'bg-gradient-to-r from-brand-accent to-purple-900'
  },
  {
    id: '3',
    title: 'بقالة في 30 دقيقة',
    description: 'أو استرد قيمة طلبك',
    imageUrl: 'https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=870&auto=format&fit=crop',
    ctaText: 'تسوق الآن',
    ctaLink: '/grocery',
    colorClass: 'bg-gradient-to-r from-brand-secondary to-amber-700'
  }
];

export const activeOrders: Order[] = [
  {
    id: 'ORD89012',
    storeName: 'البيك',
    status: 'on-the-way',
    items: [
      { name: 'وجبة دجاج', quantity: 2, price: 25 },
      { name: 'كولا كبيرة', quantity: 2, price: 6 }
    ],
    total: 62,
    date: '2023-10-15T14:30:00',
    estimatedDelivery: '14:55',
    deliveryPerson: {
      name: 'أحمد خالد',
      phone: '055 123 4567',
      photo: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1528&auto=format&fit=crop'
    }
  }
];
