import { AppRoute } from '../const';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Favorites } from '../pages/Favorites';
import { Property } from '../pages/Property';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';
import { RoomOffer } from '../types/room-offer';
import { Review } from '../types/review';
import { City, Points } from '../types/map';

type AppProps = {
  roomOffers: RoomOffer[],
  reviews: Review[],
  city: City,
  points: Points,
};

function App({ roomOffers, reviews, city, points }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main roomOffers={roomOffers} city={city} points={points} />}
      />

      <Route path={AppRoute.SignIn} element={<Login />} />

      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute redirectTo={AppRoute.Main}>
            <Favorites roomOffers={roomOffers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Room} element={<Property reviews={reviews} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
