import { RoomOffer } from '../../types/room-offer';
import { FavoriteCity } from '../FavoriteCity';

type FavoritesProps = {
  favoriteOffers: RoomOffer[],
};

type OfferName = {
  [name: string]: RoomOffer[],
};

const groupFavoriteOffers = (roomOffers: RoomOffer[]): OfferName =>
  roomOffers
    .filter((roomOffer: RoomOffer) => roomOffer.isFavorite)
    .reduce((acc: OfferName, roomOffer: RoomOffer) => {
      const { name } = roomOffer.city;

      if (!acc[name]) {
        acc[name] = [];
      }

      acc[name].push(roomOffer);

      return acc;
    }, {});

function FavoriteList({ favoriteOffers }: FavoritesProps): JSX.Element {
  const offersByCity = groupFavoriteOffers(favoriteOffers);

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, roomOffers]) => (
        <FavoriteCity roomOffers={roomOffers} city={city} key={city} />
      ))}
    </ul>
  );
}

export { FavoriteList };
