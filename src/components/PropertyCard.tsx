
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  distance?: string;
  dates?: string;
  label?: string;
  featured?: boolean;
}

const PropertyCard = ({ 
  id, 
  title, 
  location, 
  price, 
  rating, 
  reviewCount, 
  images, 
  distance, 
  dates,
  label,
  featured 
}: PropertyProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
      description: isFavorite 
        ? "Removed from your wishlist" 
        : "Added to your wishlist",
      duration: 2000,
    });
  };

  return (
    <Link to={`/listings/${id}`} className="group">
      <div className={`relative rounded-xl overflow-hidden card-shadow hover-scale ${featured ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
        {/* Image Gallery */}
        <div className="absolute inset-0 bg-muted">
          <img 
            src={images[currentImage]} 
            alt={title} 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          {/* Overlay gradient for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Navigation dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white w-3' : 'bg-white/50'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Left/Right buttons */}
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-0 -translate-x-2"
                onClick={handlePrevImage}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2"
                onClick={handleNextImage}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
          
          {/* Favorite Button */}
          <button 
            className="absolute top-3 right-3 z-10 p-2 transform transition-transform duration-300 hover:scale-110"
            onClick={toggleFavorite}
          >
            <Heart 
              size={24} 
              className={`transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500 animate-pulse' : 'text-white stroke-[1.5] hover:fill-red-500/20'}`} 
            />
          </button>
          
          {/* Label badge if provided */}
          {label && (
            <Badge variant="secondary" className="absolute top-3 left-3 bg-black/70 text-white border-none animate-pulse px-2.5 py-1">
              {label}
            </Badge>
          )}
        </div>
      </div>
      
      {/* Property details */}
      <div className="mt-3 space-y-1.5">
        <div className="flex justify-between">
          <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
              <path d="M12 17.75L5.82799 20.995L7.00699 14.122L2.00699 9.25495L8.90699 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
        <p className="text-muted-foreground">{location}</p>
        {distance && <p className="text-muted-foreground">{distance}</p>}
        {dates && <p className="text-muted-foreground">{dates}</p>}
        <p className="font-semibold"><span className="gradient-text">${price}</span> <span className="font-normal text-muted-foreground">night</span></p>
      </div>
    </Link>
  );
};

export default PropertyCard;
