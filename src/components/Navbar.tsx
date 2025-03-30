
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearchClick = () => {
    setSearchExpanded(true);
    // If there's a search query, navigate to the listings page with the search parameter
    if (searchQuery.trim()) {
      navigate(`/listings?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 px-4 md:px-6 py-4 border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-serif font-semibold hidden sm:inline-block gradient-text">TranquilStay</span>
        </Link>

        {/* Search bar - desktop */}
        <div className="hidden md:flex items-center relative max-w-md w-full">
          <div 
            className="w-full bg-background border border-border rounded-full px-4 py-2 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={handleSearchClick}
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
              <input 
                type="text" 
                placeholder="Add guests" 
                className="text-sm w-full bg-transparent outline-none border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchClick();
                  }
                }}
              />
            </div>
            <button 
              className="bg-teal-600 p-2 rounded-full text-white transform transition-transform duration-300 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                handleSearchClick();
              }}
            >
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center gap-3">
          <Link to="/listings" className="hover:bg-muted px-3 py-2 rounded-full hidden md:flex text-sm font-medium transition-all duration-300 hover:text-primary">
            Explore
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hidden md:flex transition-all duration-300 hover:text-primary hover:rotate-12">
              <Globe size={18} />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full border border-border flex items-center gap-2 transition-all duration-300 hover:shadow-md">
                  <Menu size={16} />
                  <User size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-6 space-y-4">
                  <h3 className="font-semibold mb-4 gradient-text">Menu</h3>
                  <div className="space-y-2 flex flex-col">
                    <Link to="/sign-up" className="py-2 px-3 rounded-md hover:bg-muted transition-colors font-medium hover:text-primary">Sign up</Link>
                    <Link to="/login" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">Log in</Link>
                    <div className="w-full h-px bg-border my-2"></div>
                    <Link to="/listings" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">All listings</Link>
                    <Link to="/" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">Host your home</Link>
                    <Link to="/" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">Help Center</Link>
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
