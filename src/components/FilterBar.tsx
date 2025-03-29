
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const filterCategories = [
  { id: 'amazing-views', label: 'Amazing views', icon: '🏔️' },
  { id: 'beachfront', label: 'Beachfront', icon: '🌊' },
  { id: 'cabins', label: 'Cabins', icon: '🏡' },
  { id: 'mansions', label: 'Mansions', icon: '🏰' },
  { id: 'tiny-homes', label: 'Tiny homes', icon: '🏠' },
  { id: 'trending', label: 'Trending', icon: '🔥' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'pools', label: 'Amazing pools', icon: '🏊' },
  { id: 'islands', label: 'Islands', icon: '🏝️' },
  { id: 'lakefront', label: 'Lakefront', icon: '🌅' },
  { id: 'countryside', label: 'Countryside', icon: '🌳' },
  { id: 'luxury', label: 'Luxury', icon: '✨' },
];

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(activeFilter === filterId ? null : filterId);
  };

  const scrollLeft = () => {
    const container = document.getElementById('filter-container');
    if (container) {
      const newPosition = Math.max(0, scrollPosition - 300);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('filter-container');
    if (container) {
      const newPosition = Math.min(
        container.scrollWidth - container.clientWidth,
        scrollPosition + 300
      );
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative flex items-center mt-4 mb-6">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute left-0 z-10 rounded-full shadow-md bg-background hover:bg-muted transition-all duration-300" 
        onClick={scrollLeft}
      >
        <ChevronLeft size={16} />
      </Button>
      
      <div 
        id="filter-container"
        className="flex items-center gap-2 md:gap-4 py-3 overflow-x-auto scrollbar-hide px-8 mx-auto w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filterCategories.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            className={`rounded-full whitespace-nowrap px-3 py-1 filter-item ${
              activeFilter === filter.id 
                ? 'bg-foreground text-background shadow-md' 
                : 'border-muted-foreground/20 hover:border-muted-foreground/60 hover:shadow-md'
            }`}
            onClick={() => handleFilterClick(filter.id)}
          >
            <span className="mr-2 filter-item">{filter.icon}</span>
            {filter.label}
          </Button>
        ))}
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-0 z-10 rounded-full shadow-md bg-background hover:bg-muted transition-all duration-300" 
        onClick={scrollRight}
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default FilterBar;
