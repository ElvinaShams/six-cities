import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function UserNav() {
  let nav;
  const shouldRedirect = true;

  if (!shouldRedirect) {
    nav = (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.SignIn}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    nav = (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.SignIn}>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return <nav className="header__nav">{nav}</nav>;
}

export { UserNav };
