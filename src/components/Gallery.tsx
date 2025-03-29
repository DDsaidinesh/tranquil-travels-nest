
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  images: string[];
  title: string;
}

const Gallery = ({ images, title }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
        {/* Main large image */}
        <div className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto relative overflow-hidden">
          <img
            src={images[0]}
            alt={`${title} - Main`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Side images */}
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="aspect-square relative overflow-hidden hidden md:block">
            <img
              src={img}
              alt={`${title} - ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}

        {/* Mobile additional image indicator */}
        <div className="md:hidden flex items-center justify-center mt-2">
          <div className="flex space-x-1">
            {images.slice(0, 5).map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full ${
                  idx === 0 ? 'bg-foreground' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Show all photos button */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm hover:bg-background/80"
            >
              Show all photos
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-background p-2">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-10 h-12 w-12 rounded-full bg-background/80"
                onClick={handlePrev}
              >
                <ChevronLeft />
              </Button>
              
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={images[currentIndex]}
                  alt={`${title} - ${currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-10 h-12 w-12 rounded-full bg-background/80"
                onClick={handleNext}
              >
                <ChevronRight />
              </Button>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      currentIndex === idx ? 'bg-foreground' : 'bg-muted-foreground/30'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;
