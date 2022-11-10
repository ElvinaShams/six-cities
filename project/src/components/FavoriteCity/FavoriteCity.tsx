import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { ApartmentCard } from '../ApartmentCard';

type FavoriteCityProps = {
  roomOffers: RoomOffer[],
  city: string,
};

function FavoriteCity({ roomOffers, city }: FavoriteCityProps) {
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
        {roomOffers.map((roomOffer) => (
          <ApartmentCard
            card="favorite"
            roomOffer={roomOffer}
            key={roomOffer.id}
          />
        ))}
      </div>
    </li>
  );
}

export { FavoriteCity };
