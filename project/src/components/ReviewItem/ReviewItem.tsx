import { Review } from '../../types/review';
import { getRating } from '../../util';

type ReviewItemProps = {
  review: Review,
};

function ReviewItem({ review }: ReviewItemProps) {
  const { rating, comment, date } = review;
  const { avatarUrl, name } = review.user;

  const ratingValue = getRating(Math.round(rating));

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingValue }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          April 2019
        </time>
      </div>
    </li>
  );
}

export { ReviewItem };
