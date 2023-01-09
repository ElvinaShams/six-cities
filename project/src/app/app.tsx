import { AppRoute } from '../const';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { LoginPage } from '../pages/LoginPage';
import { Favorites } from '../pages/Favorites';
import { Property } from '../pages/Property';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { getOffers, getOffersStatus } from '../store/offers-data/selectors';
import { ErrorMessage } from '../components/ErrorMessage';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const roomOffers = useAppSelector(getOffers);
  const OffersStatus = useAppSelector(getOffersStatus);

  if (OffersStatus.isError) {
    return <ErrorMessage />;
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
