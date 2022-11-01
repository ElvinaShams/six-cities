import { RoomOffer } from '../../types/room-offer';
import { FavoriteCity } from '../FavoriteCity';

type FavoritesProps = {
  favoriteOffers: RoomOffer[],
};

type OfferName = {
  [name: string]: RoomOffer[],
};

const groupFavoriteOffers = (offers: RoomOffer[]): OfferName =>
  offers
    .filter((offer: RoomOffer) => offer.isFavorite)
    .reduce((acc: OfferName, offer: RoomOffer) => {
      const { name } = offer.city;

      if (!acc[name]) {
        acc[name] = [];
      }

      acc[name].push(offer);

      return acc;
    }, {});

function FavoriteList({ favoriteOffers }: FavoritesProps): JSX.Element {
  const offersByCity = groupFavoriteOffers(favoriteOffers);
  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, offers]) => (
        <FavoriteCity offers={offers} city={city} key={city} />
      ))}
    </ul>
  );
}

export { FavoriteList };
