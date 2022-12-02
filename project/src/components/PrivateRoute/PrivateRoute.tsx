import { RouteProps, Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  redirectTo: AppRoute,
  children: JSX.Element,
  authorizationStatus: AuthStatus,
};

function PrivateRoute({
  children,
  redirectTo,
  authorizationStatus,
}: PrivateRouteProps) {
  if (authorizationStatus === AuthStatus.noAuth) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export { PrivateRoute };
