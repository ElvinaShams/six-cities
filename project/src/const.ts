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

const MAX_RATING = 5;

const REVIEW_MIN_LENGTH = 50;

const REVIEW_MAX_LENGTH = 300;

export {REVIEW_MIN_LENGTH, MAX_RATING, REVIEW_MAX_LENGTH, RatingValue};
