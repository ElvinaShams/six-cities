import { PropertyTextarea } from '../PropertyTextarea';
import { useState, ChangeEvent } from 'react';
import { REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH, RatingValue } from '../../const';
import { FormRating } from '../FormRating';
import { useParams } from 'react-router-dom';
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectPostCommentStatus } from '../../store/comments-data/selectors';
import { postComment } from '../../store/api-action/api-action-offers';

function PropertyForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectPostCommentStatus);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const { id } = useParams();

  const clearForm = () => {
    setComment('');
    setRating('');
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      dispatch(
        postComment({
          id: Number(id),
          rating: Number(rating),
          comment,
          onSuccess: clearForm,
        })
      );
    }
  };

  const isValid =
    comment.length > REVIEW_MIN_LENGTH && comment.length < REVIEW_MAX_LENGTH;

  const isDisabled = !rating || !isValid;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.target.value);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(evt.target.value);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingValue).map(([ratingTitle, ratingValue]) => (
          <FormRating
            onChange={handleRatingChange}
            ratingValue={ratingValue}
            ratingTitle={ratingTitle}
            key={ratingValue}
            disabled={isLoading}
          />
        ))}
      </div>
      <PropertyTextarea
        onChange={handleChange}
        review={comment}
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || isLoading}
        >
          {isLoading ? 'Submiting' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { PropertyForm };
