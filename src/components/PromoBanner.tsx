
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PromoBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  colorClass: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
  colorClass
}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-md ${colorClass} relative`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="p-6 md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">{title}</h2>
          <p className="mb-4 text-white/90 text-sm md:text-base">{description}</p>
          <Button 
            asChild
            variant="secondary" 
            className="bg-white text-black hover:bg-gray-100"
          >
            <a href={ctaLink}>
              {ctaText}
              <ArrowLeft className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="md:w-1/2 h-32 md:h-auto overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
