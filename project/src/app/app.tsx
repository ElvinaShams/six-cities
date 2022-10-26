import { AppRoute } from './const';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Favorites } from '../pages/Favorites.tsx';
import { Property } from '../pages/Property';
import { NotFound } from '../pages/NotFound';
import { PrivateRoute } from '../PrivateRoute';

type HomeProps = {
  placesCount: number,
};

function App({ placesCount }: HomeProps): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={<Main placesCount={placesCount} />}
      ></Route>
      <Route path={AppRoute.SignIn} element={<Login />}></Route>
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute redirectTo="/login">
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Room} element={<Property />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
