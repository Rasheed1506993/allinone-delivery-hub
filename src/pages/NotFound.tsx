
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir="rtl">
      <div className="text-center bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">عفواً، الصفحة غير موجودة</p>
        <p className="text-gray-600 mb-8">
          الصفحة التي تبحث عنها قد تكون محذوفة أو غير متاحة مؤقتاً
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-brand-primary hover:bg-brand-dark">
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              الرئيسية
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              العودة للخلف
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
