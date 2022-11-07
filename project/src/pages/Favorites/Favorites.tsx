import { FavoriteList } from '../../components/FavoriteList';
import { FavoritesEmpty } from '../../components/FavoritesEmpty';
import { Logo } from '../../components/Logo';
import { RoomOffer } from '../../types/room-offer';

type FavoritesProps = {
  roomOffers: RoomOffer[],
};

function Favorites({ roomOffers }: FavoritesProps): JSX.Element {
  const renderFavoriteContent = () => {
    if (roomOffers.length === 0) {
      return <FavoritesEmpty />;
    }
    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoriteList favoriteOffers={roomOffers} />
      </section>
    );
  };

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {renderFavoriteContent()}
        </div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </div>
  );
}

export { Favorites };
