import { City, Host, Location } from "./cities";

export type RoomOffer = {
  city: City,
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: Host,
  description: string,
  location: Location,
  id: number,
};
