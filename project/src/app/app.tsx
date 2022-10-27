import { AppRoute } from '../const';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Favorites } from '../pages/Favorites';
import { Property } from '../pages/Property';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../components/PrivateRoute';

type AppProps = {
  placesCount: number,
};

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        index
        element={<Main placesCount={placesCount} />}
      />

      <Route path={AppRoute.SignIn} element={<Login />} />

      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute redirectTo={AppRoute.Main}>
            <Favorites />
          </PrivateRoute>
        }
      />

      <Route path={AppRoute.Room} element={<Property />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
