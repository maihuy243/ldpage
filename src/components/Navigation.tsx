import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 rounded-lg gradient-aqua-pink flex items-center justify-center">
              <span className="text-black font-bold">V</span>
            </div>
            <span className="text-xl font-bold gradient-text">VideoManager</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onPageChange('home')}
              className={currentPage === 'home' ? 'gradient-aqua-pink text-black' : ''}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => onPageChange('privacy')}
              className={currentPage === 'privacy' ? 'text-[#25F4EE]' : ''}
            >
              Privacy
            </Button>
            <Button
              variant="ghost"
              onClick={() => onPageChange('terms')}
              className={currentPage === 'terms' ? 'text-[#25F4EE]' : ''}
            >
              Terms
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}