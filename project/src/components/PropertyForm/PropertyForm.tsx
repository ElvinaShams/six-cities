import { PropertyTextarea } from '../PropertyTextarea';
import { useState, ChangeEvent } from 'react';
import { REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH, RatingValue } from '../../const';
import { FormRating } from '../FormRating';

function PropertyForm(): JSX.Element {
  const [rating, setRating] = useState('0');
  const [review, setReview] = useState('');

  const isDisabled =
    !rating ||
    review.length < REVIEW_MIN_LENGTH ||
    review.length > REVIEW_MAX_LENGTH;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setReview(event.target.value);

  const handleClick = (
    event: React.MouseEvent<HTMLInputElement> & {
      target: HTMLButtonElement,
    }
  ) => setRating(event.target.value);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingValue).map(([ratingTitle, ratingValue]) => (
          <FormRating
            handleClick={handleClick}
            ratingValue={ratingValue}
            ratingTitle={ratingTitle}
          />
        ))}
      </div>
      <PropertyTextarea onChange={handleChange} review={review} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { PropertyForm };
