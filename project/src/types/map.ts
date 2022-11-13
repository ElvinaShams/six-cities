export type City = {
  title: string,
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  id: number;
  latitude: number;
  longitude: number;
};

export type Points = Point[];
