import { RoomOffer } from '../../types/room-offer';
import { ApartmentCard } from '../ApartmentCard';
import { useState } from 'react';

type CardListProps = {
  roomOffers: RoomOffer[],
};

function CardList({ roomOffers }: CardListProps) {
  const [, setActiveCard] = useState(0);

  const handleMouseOver = (id: number) => setActiveCard(id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {roomOffers.map((roomOffer) => (
        <ApartmentCard
          card="main"
          roomOffer={roomOffer}
          key={roomOffer.id}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOver}
        />
      ))}
    </div>
  );
}

export { CardList };
