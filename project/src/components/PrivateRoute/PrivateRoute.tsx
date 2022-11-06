import { RouteProps, Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = RouteProps & {
  redirectTo: AppRoute,
  children: JSX.Element,
};

function PrivateRoute({ children, redirectTo }: PrivateRouteProps) {
  const shouldRedirect = true;

  if (!shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export { PrivateRoute };
