import { AppRoute, AuthStatus } from '../const';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { LoginPage } from '../pages/LoginPage';
import { Favorites } from '../pages/Favorites';
import { Property } from '../pages/Property';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { Review } from '../types/review';
import { useAppSelector } from '../hooks';
import { Spinner } from '../components/Spinner';

type AppProps = {
  reviews: Review[],
};

function App({ reviews }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );
  const roomOffers = useAppSelector((state) => state.roomOffers);

  if (authorizationStatus === AuthStatus.unknown || isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />

      <Route path={AppRoute.SignIn} element={<LoginPage />} />

      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            redirectTo={AppRoute.Main}
            authorizationStatus={authorizationStatus}
          >
            <Favorites roomOffers={roomOffers} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Room}
        element={<Property roomOffers={roomOffers} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
