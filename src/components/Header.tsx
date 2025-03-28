
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  User, 
  LogIn,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-brand-primary" />
          <span className="font-bold text-xl hidden sm:inline-block gradient-text">Delivery Hub</span>
        </Link>

        {/* Address Selection */}
        <div className="flex items-center gap-1 text-sm bg-gray-100 rounded-full px-3 py-1 max-w-xs flex-grow mx-4">
          <MapPin className="h-4 w-4 text-brand-secondary" />
          <span className="truncate">الرياض، حي الملز</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-brand-primary">الرئيسية</Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-brand-primary">مطاعم</Link>
          <Link to="/grocery" className="text-gray-700 hover:text-brand-primary">بقالة</Link>
          <Link to="/pharmacy" className="text-gray-700 hover:text-brand-primary">صيدلية</Link>
          <Link to="/orders" className="text-gray-700 hover:text-brand-primary">طلباتي</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-brand-secondary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">3</span>
          </Button>
          
          <Button variant="outline" size="sm" className="hidden md:flex gap-2 items-center">
            <User className="h-4 w-4" />
            <span>الحساب</span>
          </Button>
          
          <Button variant="default" size="sm" className="hidden md:flex gap-2 items-center bg-brand-primary hover:bg-brand-dark">
            <LogIn className="h-4 w-4" />
            <span>تسجيل الدخول</span>
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-in">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link to="/" className="text-gray-700 hover:text-brand-primary py-2 border-b border-gray-100">الرئيسية</Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-brand-primary py-2 border-b border-gray-100">مطاعم</Link>
            <Link to="/grocery" className="text-gray-700 hover:text-brand-primary py-2 border-b border-gray-100">بقالة</Link>
            <Link to="/pharmacy" className="text-gray-700 hover:text-brand-primary py-2 border-b border-gray-100">صيدلية</Link>
            <Link to="/orders" className="text-gray-700 hover:text-brand-primary py-2 border-b border-gray-100">طلباتي</Link>
            <div className="flex gap-2 py-2">
              <Button variant="outline" size="sm" className="flex-1 gap-2 items-center justify-center">
                <User className="h-4 w-4" />
                <span>الحساب</span>
              </Button>
              <Button variant="default" size="sm" className="flex-1 gap-2 items-center justify-center bg-brand-primary hover:bg-brand-dark">
                <LogIn className="h-4 w-4" />
                <span>تسجيل الدخول</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
