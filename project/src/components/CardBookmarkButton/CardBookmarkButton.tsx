type CardButtonProps = {
  placeCardActive: string,
  isFavorite: boolean,
};

function CardBookmarkButton({ placeCardActive, isFavorite }: CardButtonProps) {
  return (
    <button
      className={`place-card__bookmark-button ${placeCardActive} button`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      {isFavorite && <span className="visually-hidden">To bookmarks</span>}
    </button>
  );
}

export { CardBookmarkButton };
