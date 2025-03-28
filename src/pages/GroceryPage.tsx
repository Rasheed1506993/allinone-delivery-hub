
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreCard from '@/components/StoreCard';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';
import { stores } from '@/data/mockData';

const GroceryPage = () => {
  // Filter stores to get only grocery stores
  const groceryStores = stores.filter(store => store.type === 'grocery');
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-brand-primary to-cyan-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">
                بقالة طازجة إلى باب منزلك
              </h1>
              <p className="mb-6 text-white/90">
                توصيل سريع لجميع احتياجاتك من البقالة والمنتجات الغذائية
              </p>
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="ابحث عن متجر أو منتج..."
                  className="w-full px-4 py-3 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters section */}
        <section className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  الكل
                </Button>
                <Button variant="outline" size="sm">
                  سوبر ماركت
                </Button>
                <Button variant="outline" size="sm">
                  خضار وفواكه
                </Button>
                <Button variant="outline" size="sm">
                  لحوم طازجة
                </Button>
                <Button variant="outline" size="sm">
                  مخبوزات
                </Button>
                <Button variant="outline" size="sm">
                  منظفات
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                فلترة
              </Button>
            </div>
          </div>
        </section>
        
        {/* Grocery stores section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">متاجر البقالة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default GroceryPage;
