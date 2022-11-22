export type City = {
  location: {
    lat: number,
    lng: number,
    zoom: number,
  },
  name: string,
};

export type Point = {
  id: number;
  latitude: number;
  longitude: number;
};

export type Points = Point[];

