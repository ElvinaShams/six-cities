import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUserData } from '../../store/action';
import { Logout } from '../../store/api-action/api-action-logaut';
import { getAuthorizationStatus, getUserEmail } from '../../store/selectors';

function UserNav() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userData = useAppSelector(getUserEmail);
  const isAuth: boolean =
    useAppSelector(getAuthorizationStatus) === AuthStatus.auth;

  const handleSignClick = () => {
    dispatch(Logout());
    dispatch(setUserData(null));
    navigate(AppRoute.Main);
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
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">{userData}</span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={AppRoute.Main}
                onClick={handleSignClick}
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
