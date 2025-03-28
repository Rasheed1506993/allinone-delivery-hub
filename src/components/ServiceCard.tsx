
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  link 
}) => {
  return (
    <Link to={link} className="block">
      <div className="service-card group">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color} text-white`}
        >
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-center text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
