import cn from 'classnames';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type CardButtonProps = {
  isFavorite: boolean,
  page: 'place-card' | 'property',
  changeFavorite: () => void,
};

function CardBookmarkButton({
  page,
  isFavorite,
  changeFavorite,
}: CardButtonProps) {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthorizationStatus);

  const onClick = () => {
    if (authStatus === AuthStatus.Auth) {
      changeFavorite();
    } else {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  };

  const classNameActive = `${page}__bookmark-button--active`;

  return (
    <button
      className={cn(
        `${page}__bookmark-button,  button`,
        isFavorite && classNameActive
      )}
      type="button"
      onClick={onClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      {isFavorite && <span className="visually-hidden">To bookmarks</span>}
    </button>
  );
}

export { CardBookmarkButton };
