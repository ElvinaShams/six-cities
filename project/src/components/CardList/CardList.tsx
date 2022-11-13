import { RoomOffer } from '../../types/room-offer';
import { ApartmentCard } from '../ApartmentCard';

type CardListProps = {
  roomOffers: RoomOffer[],
  setActiveCard: (id: number | null) => void,
};

function CardList({ roomOffers, setActiveCard }: CardListProps) {
  const handleMouseOver = (id: number | null) => setActiveCard(id);

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
