import { FavoriteList } from '../../components/FavoriteList';
import { FavoritesEmpty } from '../../components/FavoritesEmpty';
import { Footer } from '../../components/Footer';
import { Layout } from '../../components/Layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFavorites,
  selectFavoritesStatus,
} from '../../store/favorites/selectors';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/api-action/api-action-offers';
import { ErrorMessage } from '../../components/ErrorMessage';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavorites);
  const favoritesStatus = useAppSelector(selectFavoritesStatus);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (favoritesStatus.isError) {
    return <ErrorMessage />;
  }

  const renderFavoriteContent = () => {
    if (favoriteOffers.length === 0) {
      return <FavoritesEmpty />;
    }
    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoriteList favoriteOffers={favoriteOffers} />
      </section>
    );
  };

  return (
    <>
      <div className="page">
        <Layout>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              {renderFavoriteContent()}
            </div>
          </main>
          <Footer />
        </Layout>
      </div>
    </>
  );
}

export { Favorites };
