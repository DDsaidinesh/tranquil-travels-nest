
import { useState } from 'react';
import { Calendar as CalendarIcon, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

interface BookingCardProps {
  price: number;
  rating: number;
  reviewCount: number;
}

const BookingCard = ({ price, rating, reviewCount }: BookingCardProps) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookNow = () => {
    // Validate inputs
    if (!checkIn || !checkOut) {
      toast({
        title: "Missing dates",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    if (checkIn >= checkOut) {
      toast({
        title: "Invalid dates",
        description: "Check-out date must be after check-in date.",
        variant: "destructive",
      });
      return;
    }

    // Calculate number of nights
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

    // Simulate booking process
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking successful!",
        description: `Your ${nights}-night stay has been booked. Check your email for confirmation details.`,
      });
    }, 1500);
  };

  // Calculate total price (excluding fees)
  const calculateBasePrice = () => {
    if (!checkIn || !checkOut) return 0;
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return price * nights;
  };

  const basePrice = calculateBasePrice();
  const cleaningFee = basePrice > 0 ? 85 : 0;
  const serviceFee = basePrice > 0 ? Math.round(basePrice * 0.15) : 0;
  const totalPrice = basePrice + cleaningFee + serviceFee;

  return (
    <div className="border border-border rounded-xl shadow-md p-6 sticky top-24">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xl font-semibold">${price}</span>
          <span className="text-muted-foreground"> night</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.75L5.82799 20.995L7.00699 14.122L2.00699 9.25495L8.90699 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{rating}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground underline">{reviewCount} reviews</span>
        </div>
      </div>

      <div className="mb-4 border border-border rounded-t-lg">
        <div className="grid grid-cols-2">
          {/* Check-in date picker */}
          <div className="p-3 border-r border-b border-border">
            <div className="text-xs font-medium">CHECK-IN</div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-left p-0 h-6",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  {checkIn ? (
                    <span>
                      {checkIn.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  ) : (
                    <span>Add date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  className="pointer-events-auto"
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out date picker */}
          <div className="p-3 border-b border-border">
            <div className="text-xs font-medium">CHECK-OUT</div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-left p-0 h-6",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  {checkOut ? (
                    <span>
                      {checkOut.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  ) : (
                    <span>Add date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  className="pointer-events-auto"
                  disabled={(date) => 
                    date < (checkIn || new Date(new Date().setHours(0, 0, 0, 0)))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Guests input */}
        <div className="p-3">
          <div className="text-xs font-medium">GUESTS</div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              min="1"
              max="16"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="w-16 h-7 p-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <span className="text-sm ml-1">
              {guests === 1 ? 'guest' : 'guests'}
            </span>
          </div>
        </div>
      </div>

      <Button 
        className="w-full mb-4" 
        onClick={handleBookNow}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : basePrice > 0 ? 'Reserve' : 'Check availability'}
      </Button>

      <div className="text-center text-sm text-muted-foreground mb-6">
        You won't be charged yet
      </div>

      {basePrice > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="text-sm underline">${price} x {Math.ceil((checkOut!.getTime() - checkIn!.getTime()) / (1000 * 60 * 60 * 24))} nights</div>
            <div>${basePrice}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm underline">Cleaning fee</div>
            <div>${cleaningFee}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm underline">Service fee</div>
            <div>${serviceFee}</div>
          </div>
          <div className="border-t border-border pt-4 flex justify-between font-semibold">
            <div>Total before taxes</div>
            <div>${totalPrice}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
