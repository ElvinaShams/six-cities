type FormRatingProps = {
  handleClick: (
    event: React.MouseEvent<HTMLInputElement> & {
      target: HTMLButtonElement,
    }
  ) => void,
  ratingValue: number,
  ratingTitle: string,
};

function FormRating({
  handleClick,
  ratingValue,
  ratingTitle,
}: FormRatingProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingValue}
        id={`${ratingValue}-stars`}
        type="radio"
        onClick={handleClick}
      />
      <label
        htmlFor={`${ratingValue}-stars`}
        className="reviews__rating-label form__rating-label"
        title={ratingTitle}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export { FormRating };
