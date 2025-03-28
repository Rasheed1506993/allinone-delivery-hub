
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreCard from '@/components/StoreCard';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';
import { stores } from '@/data/mockData';

const PharmacyPage = () => {
  // Filter stores to get only pharmacies
  const pharmacies = stores.filter(store => store.type === 'pharmacy');
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-brand-accent to-purple-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">
                توصيل أدوية ومنتجات صحية
              </h1>
              <p className="mb-6 text-white/90">
                الأدوية والمنتجات الصحية تصل إلى باب منزلك بسرعة وأمان
              </p>
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="ابحث عن صيدلية أو منتج..."
                  className="w-full px-4 py-3 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
                  أدوية
                </Button>
                <Button variant="outline" size="sm">
                  مكملات غذائية
                </Button>
                <Button variant="outline" size="sm">
                  مستحضرات تجميل
                </Button>
                <Button variant="outline" size="sm">
                  منتجات أطفال
                </Button>
                <Button variant="outline" size="sm">
                  معدات طبية
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                فلترة
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pharmacies section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">الصيدليات المتاحة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pharmacies.map((pharmacy) => (
                <StoreCard
                  key={pharmacy.id}
                  id={pharmacy.id}
                  name={pharmacy.name}
                  image={pharmacy.image}
                  rating={pharmacy.rating}
                  deliveryTime={pharmacy.deliveryTime}
                  deliveryFee={pharmacy.deliveryFee}
                  categories={pharmacy.categories}
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

export default PharmacyPage;
