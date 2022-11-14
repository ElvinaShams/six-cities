import { Review } from '../../types/review';
import { ReviewItem } from '../ReviewItem/ReviewItem';

type ReviewsListProps = {
  reviews: Review[],
};

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export { ReviewsList };
