import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { FavoriteCard } from '../FavoriteCard';

type FavoriteCityProps = {
  offers: RoomOffer[],
  city: string,
};

function FavoriteCity({ offers, city }: FavoriteCityProps) {
  const [, setActiveCard] = useState(0);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoriteCard
            offer={offer}
            key={offer.id}
            onMouseOver={() => {
              setActiveCard(offer.id);
            }}
            onMouseLeave={() => {
              setActiveCard(0);
            }}
          />
        ))}
      </div>
    </li>
  );
}

export { FavoriteCity };
