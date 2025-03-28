
import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StoreCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  categories: string[];
}

const StoreCard: React.FC<StoreCardProps> = ({
  id,
  name,
  image,
  rating,
  deliveryTime,
  deliveryFee,
  categories
}) => {
  return (
    <Link to={`/store/${id}`} className="block">
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:scale-[1.02]">
        <div className="relative h-36 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Star className="h-3 w-3 text-yellow-500 mr-1" fill="#EAB308" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-bold text-gray-800 mb-1">{name}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Clock className="h-3 w-3 mr-1" />
              <span>{deliveryTime}</span>
            </div>
            <div className="text-gray-600">
              {deliveryFee}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
