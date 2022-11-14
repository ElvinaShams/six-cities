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
  width = 40,
  height = 40,
}

enum iconAnchor {
  width = 20,
  height = 40,
}

const MAX_RATING = 5;

const REVIEW_MIN_LENGTH = 50;

const REVIEW_MAX_LENGTH = 300;

const MAX_COUNT_IMAGES = 6;

export {REVIEW_MIN_LENGTH, MAX_RATING, REVIEW_MAX_LENGTH, RatingValue, LayerConfig, MapIconUrl, MAX_COUNT_IMAGES, IconSize, iconAnchor};
