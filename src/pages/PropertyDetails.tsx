
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share, Home, User, Coffee, Wifi, Tv, Utensils, Flag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import BookingCard from '@/components/BookingCard';
import Reviews from '@/components/Reviews';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { getPropertyById } from '@/services/propertyService';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState(getPropertyById(id || ''));
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!property) {
      navigate('/listings');
    }
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      description: isFavorite 
        ? "Removed from your wishlist" 
        : "Added to your wishlist",
      duration: 2000,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      description: "Link copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-serif font-medium mb-2">{property.title}</h1>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="fill-foreground text-foreground" size={18} />
              <span className="ml-1 font-medium">{property.rating}</span>
              <span className="mx-1">·</span>
              <span className="underline">{property.reviewCount} reviews</span>
            </div>
            <span className="mx-1">·</span>
            <span>{property.location}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="flex items-center gap-1" onClick={handleShare}>
              <Share size={18} />
              <span className="hidden md:inline">Share</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-1" onClick={toggleFavorite}>
              <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : ""} />
              <span className="hidden md:inline">Save</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-6 mb-8">
          <Gallery images={property.images} title={property.title} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-serif font-medium">
                  Hosted by {property.host.name}
                </h2>
                <div className="flex items-center flex-wrap gap-y-1">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span>{feature}</span>
                      {index < property.features.length - 1 && (
                        <span className="mx-2 text-muted-foreground">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img 
                    src={property.host.image} 
                    alt={property.host.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-medium">About this place</h3>
              <p className="leading-relaxed text-base">{property.description}</p>
            </div>

            <Separator className="my-6" />
            
            <div className="space-y-6 mb-8">
              <h3 className="text-lg font-medium">What this place offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.slice(0, showAllAmenities ? property.amenities.length : 6).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {(() => {
                      switch (amenity.toLowerCase()) {
                        case 'wifi': return <Wifi size={20} />;
                        case 'kitchen': return <Utensils size={20} />;
                        case 'tv': return <Tv size={20} />;
                        case 'coffee maker': return <Coffee size={20} />;
                        default: return <Home size={20} />;
                      }
                    })()}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              {property.amenities.length > 6 && (
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                >
                  {showAllAmenities ? 'Show less' : `Show all ${property.amenities.length} amenities`}
                </Button>
              )}
            </div>

            <Separator className="my-6" />
            
            <Reviews 
              rating={property.rating} 
              reviewCount={property.reviewCount} 
              reviews={property.reviews}
            />

            <Separator className="my-6" />
            
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-4">Location</h3>
              <div className="h-80 rounded-xl overflow-hidden bg-muted/50 relative">
                <div 
                  className="w-full h-full"
                  style={{ 
                    backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-marker+285A98(-122.4194,37.7749)/auto/500x500@2x?access_token=placeholder")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Button>Show detailed directions</Button>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">{property.location}</p>
            </div>

            <Separator className="my-6" />
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={property.host.image} 
                    alt={property.host.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-medium">Hosted by {property.host.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Joined in {property.host.joinedDate}
                    {property.host.isSuperHost && " · Superhost"}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-primary" />
                  <div>
                    <div className="font-medium">{property.reviewCount} Reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User size={20} className="text-primary" />
                  <div>
                    <div className="font-medium">Identity verified</div>
                  </div>
                </div>
              </div>
              
              <p className="text-base mb-4">
                {property.host.isSuperHost 
                  ? `${property.host.name} is a Superhost with years of experience providing exceptional stays for guests.`
                  : `${property.host.name} is committed to providing great stays for guests.`
                }
              </p>
              
              <Button variant="outline">Contact host</Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <BookingCard 
                price={property.price} 
                rating={property.rating} 
                reviewCount={property.reviewCount}
              />
              
              <div className="mt-6 border border-border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Flag size={20} />
                  <span className="underline font-medium">Report this listing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
