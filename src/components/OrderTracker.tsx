
import React from 'react';
import { Check, ChevronLeft, Map, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Order status types
type OrderStatus = 'placed' | 'preparing' | 'on-the-way' | 'delivered';

interface OrderTrackerProps {
  orderId: string;
  status: OrderStatus;
  estimatedDelivery: string;
  storeName: string;
  deliveryPerson?: {
    name: string;
    phone: string;
    photo: string;
  };
}

const OrderTracker: React.FC<OrderTrackerProps> = ({
  orderId,
  status,
  estimatedDelivery,
  storeName,
  deliveryPerson
}) => {
  const statusSteps = [
    { key: 'placed', label: 'تم تأكيد الطلب' },
    { key: 'preparing', label: 'جاري التحضير' },
    { key: 'on-the-way', label: 'في الطريق إليك' },
    { key: 'delivered', label: 'تم التوصيل' },
  ];

  const statusIndex = statusSteps.findIndex(step => step.key === status);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">تتبع الطلب #{orderId}</h3>
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Status tracking */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          {statusSteps.map((step, index) => (
            <div 
              key={step.key} 
              className="flex flex-col items-center"
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= statusIndex 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index < statusIndex ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="text-xs text-center mt-1 max-w-[70px]">
                {step.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-200 rounded-full w-full mt-2">
          <div 
            className="h-1 bg-brand-primary rounded-full transition-all duration-500"
            style={{ width: `${(statusIndex / (statusSteps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Delivery details */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex justify-between mb-2">
          <div className="flex items-center text-sm text-gray-700">
            <Clock className="h-4 w-4 mr-1 text-brand-secondary" />
            <span>الوصول المتوقع: {estimatedDelivery}</span>
          </div>
          <div className="text-sm text-gray-700">
            <span>من: {storeName}</span>
          </div>
        </div>
        
        {status === 'on-the-way' && deliveryPerson && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center">
              <img 
                src={deliveryPerson.photo} 
                alt={deliveryPerson.name}
                className="w-10 h-10 rounded-full mr-3 object-cover" 
              />
              <div>
                <p className="font-medium">{deliveryPerson.name}</p>
                <p className="text-sm text-gray-600">{deliveryPerson.phone}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-brand-primary">
              اتصال
            </Button>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Button className="flex-1 bg-brand-primary hover:bg-brand-dark">
          <Map className="h-4 w-4 mr-2" />
          تتبع على الخريطة
        </Button>
        <Button variant="outline" className="flex-1">
          <Info className="h-4 w-4 mr-2" />
          تفاصيل الطلب
        </Button>
      </div>
    </div>
  );
};

export default OrderTracker;
