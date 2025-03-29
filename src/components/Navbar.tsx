
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 px-4 md:px-6 py-4 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-serif font-semibold hidden sm:inline-block">TranquilStay</span>
        </Link>

        {/* Search bar - desktop */}
        <div className="hidden md:flex items-center relative max-w-md w-full">
          <div 
            className="w-full bg-background border border-border rounded-full px-4 py-2 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSearchExpanded(true)}
          >
            <div className="flex-1">
              <div className="text-sm font-medium">Anywhere</div>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">Any week</div>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">Add guests</div>
            </div>
            <div className="bg-teal-600 p-2 rounded-full text-white">
              <Search size={16} />
            </div>
          </div>
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center gap-3">
          <Link to="/listings" className="hover:bg-muted px-3 py-2 rounded-full hidden md:flex text-sm font-medium">
            Explore
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hidden md:flex">
              <Globe size={18} />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full border border-border flex items-center gap-2">
                  <Menu size={16} />
                  <User size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-6 space-y-4">
                  <h3 className="font-semibold mb-4">Menu</h3>
                  <div className="space-y-2 flex flex-col">
                    <Link to="/sign-up" className="py-2 px-3 rounded-md hover:bg-muted transition-colors font-medium">Sign up</Link>
                    <Link to="/login" className="py-2 px-3 rounded-md hover:bg-muted transition-colors">Log in</Link>
                    <div className="w-full h-px bg-border my-2"></div>
                    <Link to="/listings" className="py-2 px-3 rounded-md hover:bg-muted transition-colors">All listings</Link>
                    <Link to="/" className="py-2 px-3 rounded-md hover:bg-muted transition-colors">Host your home</Link>
                    <Link to="/" className="py-2 px-3 rounded-md hover:bg-muted transition-colors">Help Center</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
