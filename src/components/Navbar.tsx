
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, User, Menu, Calendar, Users, MapPin } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState('');
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the search bar when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleSearchClick = () => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (date) params.append('date', date.toISOString());
    if (guests) params.append('guests', guests);
    if (searchQuery.trim()) params.append('search', searchQuery.trim());
    
    navigate(`/listings?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'JP', name: 'Japan' }
  ];

  return (
    <nav className={`sticky top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 px-4 md:px-6 py-4 border-b border-border transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
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
        <div className={`hidden md:flex items-center relative max-w-md w-full transition-all duration-300 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div 
            className="w-full bg-background border border-border rounded-full px-4 py-2 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            onKeyDown={handleKeyPress}
          >
            {/* Location */}
            <Popover open={activeInput === 'location'} onOpenChange={(open) => setActiveInput(open ? 'location' : null)}>
              <PopoverTrigger asChild>
                <div className="flex-1 cursor-pointer">
                  <div className="text-sm font-medium flex items-center gap-1">
                    <MapPin size={14} className="text-primary" />
                    {location ? location : "Anywhere"}
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-3" align="start">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Where to?</h3>
                  <Input
                    placeholder="Search destinations"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full"
                  />
                  <div className="mt-2 space-y-1">
                    <div 
                      className="p-2 hover:bg-muted rounded-md cursor-pointer"
                      onClick={() => {
                        setLocation('New York');
                        setActiveInput(null);
                      }}
                    >
                      New York
                    </div>
                    <div 
                      className="p-2 hover:bg-muted rounded-md cursor-pointer"
                      onClick={() => {
                        setLocation('San Francisco');
                        setActiveInput(null);
                      }}
                    >
                      San Francisco
                    </div>
                    <div 
                      className="p-2 hover:bg-muted rounded-md cursor-pointer"
                      onClick={() => {
                        setLocation('London');
                        setActiveInput(null);
                      }}
                    >
                      London
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div className="h-6 w-px bg-border"></div>

            {/* Date */}
            <Popover open={activeInput === 'date'} onOpenChange={(open) => setActiveInput(open ? 'date' : null)}>
              <PopoverTrigger asChild>
                <div className="flex-1 cursor-pointer">
                  <div className="text-sm font-medium flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    {date ? date.toLocaleDateString() : "Any week"}
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate);
                    setActiveInput(null);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <div className="h-6 w-px bg-border"></div>

            {/* Guests */}
            <Popover open={activeInput === 'guests'} onOpenChange={(open) => setActiveInput(open ? 'guests' : null)}>
              <PopoverTrigger asChild>
                <div className="flex-1 cursor-pointer">
                  <div className="text-sm font-medium flex items-center gap-1">
                    <Users size={14} className="text-primary" />
                    {guests ? `${guests} guest${Number(guests) !== 1 ? 's' : ''}` : "Add guests"}
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3" align="start">
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">How many guests?</h3>
                  <Input
                    type="number"
                    min="1"
                    placeholder="Number of guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-end">
                    <Button size="sm" onClick={() => setActiveInput(null)}>
                      Apply
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <button 
              className="bg-teal-600 p-2 rounded-full text-white transform transition-transform duration-300 hover:scale-105"
              onClick={handleSearchClick}
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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hidden md:flex transition-all duration-300 hover:text-primary hover:rotate-12">
                  <Globe size={18} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm mb-2">Choose a country</h3>
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {countries.map((country) => (
                      <div 
                        key={country.code}
                        className={`p-2 hover:bg-muted rounded-md cursor-pointer flex items-center gap-2 ${selectedCountry === country.code ? 'bg-muted' : ''}`}
                        onClick={() => {
                          setSelectedCountry(country.code);
                        }}
                      >
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
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
