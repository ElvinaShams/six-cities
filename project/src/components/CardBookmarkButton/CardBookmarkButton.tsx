import cn from 'classnames';

type CardButtonProps = {
  isFavorite: boolean,
  page: 'place-card' | 'property',
};

function CardBookmarkButton({ page, isFavorite }: CardButtonProps) {
  const favoriteCard = `${page}__bookmark-button--active`;

  return (
    <button
      className={cn(
        `${page}__bookmark-button,  button`,
        isFavorite && favoriteCard
      )}
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
