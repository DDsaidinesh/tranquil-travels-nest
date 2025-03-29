
import { useState, useEffect, useRef } from 'react';
import { toast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

// Mock map functionality since we aren't using a real map API in this example
const MapView = ({ properties }: { properties: any[] }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Create a simple mock map UI
      if (mapRef.current) {
        const createMockMap = () => {
          const map = mapRef.current;
          if (!map) return;
          
          // Clear previous content
          map.innerHTML = '';
          
          // Create mock pin elements for each property
          properties.forEach((property, index) => {
            const pin = document.createElement('div');
            pin.className = 'absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:z-50';
            
            // Calculate random positions (in a real app, would use actual coordinates)
            const top = 20 + Math.random() * 60;
            const left = 20 + Math.random() * 60;
            
            pin.style.top = `${top}%`;
            pin.style.left = `${left}%`;
            
            // Create price pill
            const pricePill = document.createElement('div');
            pricePill.className = 'bg-foreground text-background rounded-full px-2 py-1 text-sm font-medium cursor-pointer transform hover:scale-110 transition-transform';
            pricePill.textContent = `$${property.price}`;
            
            // Add click event to simulate navigation
            pricePill.addEventListener('click', () => {
              toast({
                title: property.title,
                description: `You've selected: ${property.title} in ${property.location}`,
              });
            });
            
            pin.appendChild(pricePill);
            map.appendChild(pin);
          });
        };
        
        createMockMap();
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [properties]);

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-4">
          <h3 className="font-medium">Unable to load map</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => setError(null)}>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full rounded-lg overflow-hidden bg-muted/50">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircle className="animate-spin text-primary" size={30} />
        </div>
      ) : null}
      
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ 
          backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-marker+285A98(-122.4194,37.7749)/auto/500x500@2x?access_token=placeholder")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-background rounded-lg p-3 shadow-md">
          <div className="text-sm text-muted-foreground mb-2">
            * This is a mockup map for demonstration. In a real application, this would be integrated with a mapping API like Google Maps or Mapbox.
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">
              <strong>{properties.length}</strong> properties in this area
            </p>
            <Button size="sm" variant="outline">
              Show list view
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
