
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
    date: string;
  };
  rating: number;
  comment: string;
}

interface ReviewsProps {
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

const Reviews = ({ rating, reviewCount, reviews }: ReviewsProps) => {
  const [visibleReviews, setVisibleReviews] = useState(6);

  // Calculate rating breakdown
  const ratingBreakdown = {
    cleanliness: 4.9,
    communication: 4.8,
    checkIn: 5.0,
    accuracy: 4.9,
    location: 4.7,
    value: 4.6,
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 6);
  };

  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Star className="fill-foreground text-foreground" size={24} />
        <h2 className="text-xl font-medium">
          {rating} · {reviewCount} reviews
        </h2>
      </div>

      {/* Rating breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
        <div className="flex items-center justify-between">
          <span>Cleanliness</span>
          <div className="flex items-center gap-2">
            <Progress value={ratingBreakdown.cleanliness * 20} className="h-2 w-32" />
            <span className="text-sm">{ratingBreakdown.cleanliness}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Communication</span>
          <div className="flex items-center gap-2">
            <Progress value={ratingBreakdown.communication * 20} className="h-2 w-32" />
            <span className="text-sm">{ratingBreakdown.communication}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Check-in</span>
          <div className="flex items-center gap-2">
            <Progress value={ratingBreakdown.checkIn * 20} className="h-2 w-32" />
            <span className="text-sm">{ratingBreakdown.checkIn}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Accuracy</span>
          <div className="flex items-center gap-2">
            <Progress value={ratingBreakdown.accuracy * 20} className="h-2 w-32" />
            <span className="text-sm">{ratingBreakdown.accuracy}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Location</span>
          <div className="flex items-center gap-2">
            <Progress value={ratingBreakdown.location * 20} className="h-2 w-32" />
            <span className="text-sm">{ratingBreakdown.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Value</span>
          <div className="flex items-center gap-2">
            <Progress value={ratingBreakdown.value * 20} className="h-2 w-32" />
            <span className="text-sm">{ratingBreakdown.value}</span>
          </div>
        </div>
      </div>

      {/* Reviews list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={review.user.avatar}
                alt={review.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{review.user.name}</h4>
                <div className="text-sm text-muted-foreground">{review.user.date}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {visibleReviews < reviews.length && (
        <Button variant="outline" onClick={loadMoreReviews}>
          Show more reviews
        </Button>
      )}
    </div>
  );
};

export default Reviews;
