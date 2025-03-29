
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (date) params.append('date', date.toISOString());
    if (guests) params.append('guests', guests);
    
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl mb-16">
      {/* Hero image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" 
          alt="Beautiful destination" 
          className="w-full h-full object-cover transition-transform duration-7000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md max-w-3xl animate-fade-in">
          Find your perfect getaway
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "200ms"}}>
          Discover unique stays and experiences around the world
        </p>
        
        {/* Search panel */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-3 md:p-4 animate-fade-in glass-card" style={{animationDelay: "400ms"}}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
            <div className="relative md:col-span-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                <MapPin size={20} />
              </div>
              <Input 
                placeholder="Where to?" 
                className="pl-10 h-14 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="relative md:col-span-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                <Calendar size={20} />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left pl-10 h-14 rounded-lg border font-normal transition-all duration-300 hover:border-primary/50"
                  >
                    {date ? (
                      date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    ) : (
                      <span className="text-muted-foreground">Select date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="rounded-lg pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="relative md:col-span-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                <Users size={20} />
              </div>
              <Input 
                placeholder="Number of guests" 
                className="pl-10 h-14 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            
            <Button 
              className="h-14 rounded-lg text-base flex items-center gap-2 md:col-span-1 btn-shine transition-all duration-300 hover:shadow-lg"
              onClick={handleSearch}
            >
              <Search size={20} />
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
