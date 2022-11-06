type CardButtonProps = {
  placeCardActive: string,
};

function CardButton({ placeCardActive }: CardButtonProps) {
  return (
    <button
      className={`place-card__bookmark-button ${placeCardActive} button`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export { CardButton };
