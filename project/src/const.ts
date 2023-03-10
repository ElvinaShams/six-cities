import { City } from "./types/cities";

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room ='/offer/:id',
  NotFound = '*',
}

enum RatingTitles {
  perfect ='perfect',
  good = 'good',
  notBad = 'not bad',
  badly = 'badly',
  terribly = 'terribly',
};

const RatingValue = {
  [RatingTitles.perfect]: 5,
  [RatingTitles.good]: 4,
  [RatingTitles.notBad]: 3,
  [RatingTitles.badly]: 2,
  [RatingTitles.terribly]: 1,
}

const LayerConfig = {
  BaseUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}

enum MapIconUrl {
  Default = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}

enum IconSize {
  Width = 27,
  Height = 39,
}

enum iconAnchor {
  Width = 13.5,
  Height = 40,
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum SortTypes {
  Popular = 'Popular',
  Low = 'Price: low to high',
  High = ' Price: high to low',
  Top = 'Top rated first',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
  Loading = 'LOADING',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Offer = '/offer/:id',
  Favorites = '/favorite',
}

enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
  Comments = 'COMMENTS',
  Favorites = 'Favorites',
  Notifications = 'Notifications',
  Hotels = 'HOTELS'
}

enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

export const cities: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
];

const MAX_RATING = 5;

const REVIEW_MIN_LENGTH = 50;

const REVIEW_MAX_LENGTH = 300;

const MAX_COUNT_IMAGES = 6;

const TIMER_ERROR = 2000;

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export {REVIEW_MIN_LENGTH, APIRoute, AuthStatus, NameSpace, FetchStatus, TIMER_ERROR, BACKEND_URL, REQUEST_TIMEOUT, AUTH_TOKEN_KEY_NAME, MAX_RATING, CityName, SortTypes, REVIEW_MAX_LENGTH, RatingValue, LayerConfig, MapIconUrl, MAX_COUNT_IMAGES, IconSize, iconAnchor};
