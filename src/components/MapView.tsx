
import React from 'react';

const MapView = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
      {/* This would be replaced with a real map integration */}
      <div className="bg-gray-200 w-full h-full flex items-center justify-center">
        <div className="text-center p-4">
          <h3 className="text-lg font-medium mb-2">خريطة التوصيل</h3>
          <p className="text-gray-600 text-sm">
            هنا ستظهر خريطة تفاعلية لتتبع الطلب
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapView;
