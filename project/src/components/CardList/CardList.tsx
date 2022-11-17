import { RoomOffer } from '../../types/room-offer';
import { ApartmentCard } from '../ApartmentCard';

type CardListProps = {
  roomOffers: RoomOffer[],
  page: 'main' | 'property'
  onMouseOver?: (id: number | null) => void,
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
} as const

function CardList({ roomOffers, page, onMouseOver }: CardListProps) {
  const {className, card} = propertiesPage[page];

  return (
    <div className={`${className}__places-list`} >
      {roomOffers.map((roomOffer) => (
        <ApartmentCard
          card={card}
          roomOffer={roomOffer}
          key={roomOffer.id}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseOver}
        />
      ))}
    </div>
  );
}

export { CardList };
