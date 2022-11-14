import { RoomOffer } from '../../types/room-offer';
import { ApartmentCard } from '../ApartmentCard';

type CardListProps = {
  roomOffers: RoomOffer[],
  page: 'main' | 'property'
  setActiveCard: (id: number | null) => void,
};

const propertiesPage = {
  main: {
  className: 'cities',
  card: 'main'
  },
  property: {
    className: 'near',
    card: 'property',
  }
}
function CardList({ roomOffers, setActiveCard }: CardListProps) {
  const handleMouseOver = (id: number | null) => setActiveCard(id);

  const {className, card} = propertiesPage[page];

  return (
    <div className={`${className}__places-list places__list tabs__content`}>
      {roomOffers.map((roomOffer) => (
        <ApartmentCard
          card={card}
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
