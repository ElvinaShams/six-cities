import { RouteProps, Navigate } from 'react-router-dom';
import React from 'react';

type PrivateRouteProps = RouteProps & {
  redirectTo: string,
  children: React.ReactNode,
};

function PrivateRoute({ children, redirectTo }: PrivateRouteProps) {
  const shouldRedirect = false;
  if (!shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }
  return children;
}

export { PrivateRoute };
