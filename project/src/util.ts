import { MAX_RATING, SortTypes } from './const';
import { RoomOffer } from './types/room-offer';

const getRating = (rating: number): string => `${(100 / MAX_RATING) * rating}%`;

const sortOffers = (sortType: SortTypes, offers: RoomOffer[]) => {
  switch (sortType) {
    case SortTypes.High:
      return offers.sort((a, b) => b.price - a.price);
    case SortTypes.Low:
      return offers.sort((a, b) =>  a.price - b.price);
    case SortTypes.Top:
      return offers.sort((a, b) => b.rating - a.rating);
    case SortTypes.Popular:
      return offers;
  }
};

export { getRating, sortOffers };
