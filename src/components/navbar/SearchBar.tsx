
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  isScrolled: boolean;
}

const SearchBar = ({ isScrolled }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState('');
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const navigate = useNavigate();

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

  return (
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
  );
};

export default SearchBar;
