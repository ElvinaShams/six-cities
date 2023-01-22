type FormRatingProps = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  ratingValue: number,
  ratingTitle: string,
  disabled?: boolean,
};

function FormRating({
  onChange,
  ratingValue,
  ratingTitle,
  disabled,
}: FormRatingProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingValue}
        id={`${ratingValue}-stars`}
        type="radio"
        onChange={onChange}
        disabled={disabled}
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
