
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import StoreCard from '@/components/StoreCard';
import PromoBanner from '@/components/PromoBanner';
import OrderTracker from '@/components/OrderTracker';
import MapView from '@/components/MapView';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Search } from 'lucide-react';
import { services, stores, promoBanners, activeOrders, iconComponents } from '@/data/mockData';

const Index = () => {
  // Filter stores by type
  const restaurants = stores.filter(store => store.type === 'restaurant');
  const groceryStores = stores.filter(store => store.type === 'grocery');
  
  // Get active order if exists
  const activeOrder = activeOrders.length > 0 ? activeOrders[0] : null;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-brand-primary to-brand-dark text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                كل ما تحتاجه، موصل لباب بيتك
              </h1>
              <p className="text-lg mb-8 text-white/90">
                طعام، بقالة، أدوية، وأكثر. كلها في تطبيق واحد وبنقرة زر.
              </p>
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="ابحث عن مطاعم، متاجر بقالة، أو صيدليات..."
                  className="w-full px-4 py-3 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Active order tracker (if exists) */}
        {activeOrder && (
          <section className="py-6 bg-white border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <OrderTracker 
                    orderId={activeOrder.id}
                    status={activeOrder.status}
                    estimatedDelivery={activeOrder.estimatedDelivery}
                    storeName={activeOrder.storeName}
                    deliveryPerson={activeOrder.deliveryPerson}
                  />
                </div>
                <div className="md:w-1/2 h-64 md:h-auto">
                  <MapView />
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Services section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">خدماتنا</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service) => {
                const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
                return (
                  <ServiceCard
                    key={service.id}
                    icon={IconComponent}
                    title={service.title}
                    description={service.description}
                    color={service.color}
                    link={service.link}
                  />
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Promo banners section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {promoBanners.map((banner) => (
                <PromoBanner
                  key={banner.id}
                  title={banner.title}
                  description={banner.description}
                  imageUrl={banner.imageUrl}
                  ctaText={banner.ctaText}
                  ctaLink={banner.ctaLink}
                  colorClass={banner.colorClass}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular restaurants section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">مطاعم شهيرة</h2>
              <Button variant="ghost" className="text-brand-primary">
                عرض الكل <ChevronLeft className="h-4 w-4 mr-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {restaurants.map((restaurant) => (
                <StoreCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  image={restaurant.image}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                  deliveryFee={restaurant.deliveryFee}
                  categories={restaurant.categories}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Grocery stores section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">بقالة</h2>
              <Button variant="ghost" className="text-brand-primary">
                عرض الكل <ChevronLeft className="h-4 w-4 mr-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {groceryStores.map((store) => (
                <StoreCard
                  key={store.id}
                  id={store.id}
                  name={store.name}
                  image={store.image}
                  rating={store.rating}
                  deliveryTime={store.deliveryTime}
                  deliveryFee={store.deliveryFee}
                  categories={store.categories}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
