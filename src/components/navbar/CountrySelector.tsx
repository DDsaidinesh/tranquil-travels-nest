
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

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
  );
};

export default CountrySelector;
