type PropertyTextareaProps = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  review: string,
};

function PropertyTextarea({ onChange, review }: PropertyTextareaProps) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      onChange={onChange}
      value={review}
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
    ></textarea>
  );
}

export { PropertyTextarea };
