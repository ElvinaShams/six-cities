type PropertyTextareaProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  review: string,
  disabled?: boolean,

};

function PropertyTextarea({ onChange, review, disabled }: PropertyTextareaProps) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      onChange={onChange}
      value={review}
      disabled={disabled}
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
    ></textarea>
  );
}

export { PropertyTextarea };
