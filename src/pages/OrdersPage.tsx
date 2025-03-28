
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderTracker from '@/components/OrderTracker';
import MapView from '@/components/MapView';
import { Button } from '@/components/ui/button';
import { Clock, ShoppingBag, Package } from 'lucide-react';
import { activeOrders } from '@/data/mockData';

const OrdersPage = () => {
  // Get active order if exists
  const activeOrder = activeOrders.length > 0 ? activeOrders[0] : null;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">طلباتي</h1>
          
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <Button variant="ghost" className="relative text-brand-primary">
              <Package className="w-4 h-4 mr-2" />
              طلبات نشطة
              <span className="absolute -top-1 -right-1 bg-brand-secondary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">1</span>
            </Button>
            <Button variant="ghost">
              <Clock className="w-4 h-4 mr-2" />
              طلبات سابقة
            </Button>
          </div>
          
          {activeOrder ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <OrderTracker 
                  orderId={activeOrder.id}
                  status={activeOrder.status}
                  estimatedDelivery={activeOrder.estimatedDelivery}
                  storeName={activeOrder.storeName}
                  deliveryPerson={activeOrder.deliveryPerson}
                />
                
                {/* Order details */}
                <div className="bg-white rounded-xl shadow-md p-4 mt-6">
                  <h3 className="font-bold text-lg mb-4">تفاصيل الطلب</h3>
                  
                  <div className="border-b pb-4 mb-4">
                    {activeOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-gray-800 mr-2">
                            {item.quantity}x
                          </span>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">
                          {item.price * item.quantity} ريال
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">المجموع الفرعي</span>
                      <span>{activeOrder.total - 10} ريال</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">رسوم التوصيل</span>
                      <span>10 ريال</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>المجموع</span>
                      <span>{activeOrder.total} ريال</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-96 lg:h-auto">
                <MapView />
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-medium mb-2">لا توجد طلبات نشطة</h2>
              <p className="text-gray-600 mb-6">
                لم تقم بإجراء أي طلب بعد. تصفح المتاجر وابدأ التسوق.
              </p>
              <Button asChild className="bg-brand-primary hover:bg-brand-dark">
                <a href="/">تصفح المتاجر</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrdersPage;
