import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg gradient-aqua-pink flex items-center justify-center">
              <span className="text-black font-bold">V</span>
            </div>
            <span className="text-xl font-bold gradient-text">VideoManager</span>
          </Link>

          {/* Menu */}
          <div className="flex items-center space-x-6">
            <Link to="/">
              <Button
                variant={currentPath === "/" ? "default" : "ghost"}
                className={currentPath === "/" ? "gradient-aqua-pink text-black" : ""}
              >
                Home
              </Button>
            </Link>

            <Link to="/privacy">
              <Button
                variant={currentPath === "/privacy" ? "default" : "ghost"}
                className={currentPath === "/privacy" ? "text-[#25F4EE] gradient-aqua-pink" : ""}
              >
                Privacy
              </Button>
            </Link>

            <Link to="/terms">
              <Button
                variant={currentPath === "/terms" ? "default" : "ghost"}
                className={currentPath === "/terms" ? "text-[#25F4EE] gradient-aqua-pink" : ""}
              >
                Terms
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
