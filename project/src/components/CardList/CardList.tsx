import { RoomOffer } from '../../types/room-offer';
import { ApartmentСard } from '../ApartmentСard';
import { useState } from 'react';

type CardListProps = {
  roomOffers: RoomOffer[],
};

function CardList({ roomOffers }: CardListProps) {
  const [, setActiveCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {roomOffers.map((roomOffer) => (
        <ApartmentСard
          roomOffer={roomOffer}
          key={roomOffer.id}
          onMouseOver={() => {
            setActiveCard(roomOffer.id);
          }}
          onMouseLeave={() => {
            setActiveCard(0);
          }}
        />
      ))}
    </div>
  );
}

export { CardList };
