import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Logo } from '../Logo';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Logo type="footer" />
    </>
  );
}

export { Layout };
