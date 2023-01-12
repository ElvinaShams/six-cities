import { FetchStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { RoomOffer } from './../../types/room-offer';
export const getFavorites = (state: State): RoomOffer[] => state[NameSpace.Favorites].favorites;
export const getFavoritesFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorites].favoritesStatus;
