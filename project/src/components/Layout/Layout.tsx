import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

type LayoutProps = {
  hasFooter?: boolean,
  children: React.ReactNode,
};

function Layout({ children, hasFooter = false }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      {hasFooter && <Footer />}
    </>
  );
}

export { Layout };
