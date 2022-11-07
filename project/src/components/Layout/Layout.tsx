import { Outlet } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Header } from '../Header';
import { Logo } from '../Logo';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {AppRoute.Favorites && (
        <footer>
          <Logo type="footer" />
        </footer>
      )}
    </>
  );
}

export { Layout };
