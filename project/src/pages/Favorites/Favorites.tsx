import { FavoriteList } from '../../components/FavoriteList';
import { FavoritesEmpty } from '../../components/FavoritesEmpty';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { RoomOffer } from '../../types/room-offer';

type FavoritesProps = {
  roomOffers: RoomOffer[],
};

function Favorites({ roomOffers }: FavoritesProps): JSX.Element {
  let favorites;

  if (roomOffers.length === 0) {
    favorites = <FavoritesEmpty />;
  } else {
    favorites = (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoriteList favoriteOffers={roomOffers} />
      </section>
    );
  }

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">{favorites}</div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </div>
  );
}

export { Favorites };
