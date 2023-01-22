import { useAppSelector } from '../../hooks';
import { PropertyForm } from '../PropertyForm';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { getComments } from '../../store/comments-data/selectors';
import { getIsAuth } from '../../store/user-process/selectors';

function ReviewsList() {
  const authStatus = useAppSelector(getIsAuth);
  const reviews = useAppSelector(getComments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </ul>
      {authStatus && <PropertyForm />}
    </section>
  );
}

export { ReviewsList };
