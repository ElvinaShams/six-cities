export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room ='/offer/:id'
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
  auth = 'AUTH',
  noAuth = 'NO_AUTH',
  unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

const MAX_RATING = 5;

const REVIEW_MIN_LENGTH = 50;

const REVIEW_MAX_LENGTH = 300;

const MAX_COUNT_IMAGES = 6;

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
const REQUEST_TIMEOUT = 5000;

export {REVIEW_MIN_LENGTH, APIRoute, AuthStatus, BACKEND_URL, REQUEST_TIMEOUT, AUTH_TOKEN_KEY_NAME, MAX_RATING, CityName, SortTypes, REVIEW_MAX_LENGTH, RatingValue, LayerConfig, MapIconUrl, MAX_COUNT_IMAGES, IconSize, iconAnchor};
