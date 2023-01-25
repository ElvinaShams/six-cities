export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type City = {
  name: string,
  location: Location,
};

export type Host = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string,
};

export type Point = {
  id: number,
  latitude: number,
  longitude: number,
};

export type FavoriteTypePayload = {
  hotelId: number,
  status: number,
};

export type Points = Point[];
