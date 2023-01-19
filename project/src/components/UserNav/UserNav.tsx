import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/api-action/api-action-user';
import { getFavorites } from '../../store/favorites/selectors';
import {
  getAuthorizationStatus,
  getUserData,
} from '../../store/user-process/selectors';

function UserNav() {
  const dispatch = useAppDispatch();

  const userData = useAppSelector(getUserData);
  const favoriteOffers = useAppSelector(getFavorites);
  const isAuth: boolean =
    useAppSelector(getAuthorizationStatus) === AuthStatus.Auth;

  const handleSignOutClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth ? (
          <>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Favorites}
              >
                <div
                  className="header__avatar-wrapper"
                  style={{
                    backgroundSize: '100%',
                    backgroundRepeat: ' no-repeat',
                    backgroundImage: `url(${userData?.avatarUrl})`,
                  }}
                ></div>
                <span className="header__user-name user__name">
                  {userData?.email}
                </span>
                <span className="header__favorite-count">
                  {favoriteOffers.length}
                </span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={AppRoute.Main}
                onClick={handleSignOutClick}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        ) : (
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.SignIn}>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export { UserNav };
