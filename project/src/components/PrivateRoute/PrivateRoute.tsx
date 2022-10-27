import { RouteProps, Navigate } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '../../const';

type PrivateRouteProps = RouteProps & {
  redirectTo: AppRoute,
  children: JSX.Element,
};

function PrivateRoute({ children, redirectTo }: PrivateRouteProps) {
  const shouldRedirect = false;

  if (!shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export { PrivateRoute };
