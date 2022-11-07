export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room ='/offer/:id'
}

const MAX_RATING = 5;

const REVIEW_MIN_LENGTH = 50;

export {REVIEW_MIN_LENGTH, MAX_RATING};
