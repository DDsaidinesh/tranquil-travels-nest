
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import PropertyCard from '@/components/PropertyCard';
import MapView from '@/components/MapView';
import { getFilteredProperties } from '@/services/propertyService';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Filter, MapPin, Map, Grid3X3 } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';

const ListingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState(getFilteredProperties(Object.fromEntries(searchParams.entries())));
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [showMap, setShowMap] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Apply filters
  const applyFilters = (updatedFilters: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    
    // Update search params
    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    
    setSearchParams(newParams);
    setProperties(getFilteredProperties(Object.fromEntries(newParams.entries())));
  };

  // Handle filter dialog submission
  const handleFilterSubmit = () => {
    applyFilters({
      location,
      price_min: priceRange[0].toString(),
      price_max: priceRange[1].toString(),
    });
  };

  // Toggle map view
  const toggleMapView = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4">
        <div className="pt-4 pb-2 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-medium">All Listings</h1>
          
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filters</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Filter properties</DialogTitle>
                </DialogHeader>
                
                <div className="py-4 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        placeholder="Anywhere"
                        className="pl-10"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Price range</label>
                      <span className="text-sm text-muted-foreground">
                        ${priceRange[0]} - ${priceRange[1]}
                      </span>
                    </div>
                    <Slider
                      defaultValue={priceRange}
                      max={1000}
                      step={10}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => {
                    setLocation('');
                    setPriceRange([0, 1000]);
                  }}>
                    Reset
                  </Button>
                  <Button onClick={handleFilterSubmit}>Apply Filters</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={toggleMapView}
            >
              {showMap ? <Grid3X3 size={16} /> : <Map size={16} />}
            </Button>
          </div>
        </div>

        <FilterBar />
        
        <div className="py-4 mb-4">
          <p className="text-muted-foreground">
            {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
            {location ? ` in "${location}"` : ''}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className={showMap ? "hidden lg:block lg:w-1/2 xl:w-3/5" : "w-full"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                />
              ))}
            </div>
            
            {properties.length === 0 && (
              <div className="py-12 text-center">
                <h3 className="text-lg font-medium mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or search for a different location.</p>
                <Button onClick={() => {
                  setSearchParams({});
                  setProperties(getFilteredProperties({}));
                  setLocation('');
                  setPriceRange([0, 1000]);
                }}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
          
          {(showMap || window.innerWidth >= 1024) && (
            <div className={`${showMap ? "w-full h-[calc(100vh-200px)]" : "hidden lg:block lg:w-1/2 xl:w-2/5 lg:h-[calc(100vh-200px)] lg:sticky lg:top-24"}`}>
              <div className="h-full rounded-xl overflow-hidden">
                <MapView properties={properties} />
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListingsPage;
