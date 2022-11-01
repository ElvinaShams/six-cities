import { FavoriteList } from '../../components/FavoriteList';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { RoomOffer } from '../../types/room-offer';

type FavoritesProps = {
  roomOffers: RoomOffer[],
};

function Favorites({ roomOffers }: FavoritesProps) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favoriteOffers={roomOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo />
      </footer>
    </div>
  );
}

export { Favorites };
