import { Review } from './../../types/review';
import { State } from '../../types/state';
import { FetchStatus, NameSpace } from '../../const';

export const getComments = (state: State): Review[] =>
  state[NameSpace.Comments].comments;

export const getCommentsFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].fetchStatus;

export const getPostCommentStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].postStatus;
