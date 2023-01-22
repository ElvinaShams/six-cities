import { PropertyTextarea } from '../PropertyTextarea';
import { useState, ChangeEvent } from 'react';
import { REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH, RatingValue } from '../../const';
import { FormRating } from '../FormRating';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCommentStatus } from '../../store/comments-data/selectors';
import { ReviewComment } from '../../types/review';
import { postComment } from '../../store/api-action/api-action-offers';

function PropertyForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isLoading, isSuccess } = useAppSelector(getCommentStatus);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = (data: ReviewComment) => {
    dispatch(postComment(data));
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      onSubmit({ id: Number(id), rating: Number(rating), comment });
    }
  };

  const clearForm = () => {
    setComment('');
    setRating('');
  };

  useEffect(() => {
    if (isSuccess) {
      clearForm();
    }
  }, [isSuccess]);

  const isValid =
    comment.length > REVIEW_MIN_LENGTH && comment.length < REVIEW_MAX_LENGTH;

  const isDisabled = !rating || !isValid;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.target.value);

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
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
          Submit
        </button>
      </div>
    </form>
  );
}

export { PropertyForm };
