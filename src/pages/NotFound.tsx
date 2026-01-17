import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-heading font-bold text-gradient">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <Link to="/contact">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
