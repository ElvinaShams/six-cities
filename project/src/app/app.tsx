import { AppRoute, AuthStatus } from '../const';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { LoginPage } from '../pages/LoginPage';
import { Favorites } from '../pages/Favorites';
import { Property } from '../pages/Property';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { useAppSelector } from '../hooks';
import { Spinner } from '../components/Spinner';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import {
  getOffers,
  getQuestionsDataLoadingStatus,
} from '../store/offers-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getQuestionsDataLoadingStatus);
  const roomOffers = useAppSelector(getOffers);

  if (authorizationStatus === AuthStatus.Unknown || isOffersDataLoading) {
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
