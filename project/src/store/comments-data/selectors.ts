import { Review } from './../../types/review';
import { State } from '../../types/state';
import { FetchStatus, NameSpace } from '../../const';
import { createSelector } from '@reduxjs/toolkit';

export const getComments = (state: State): Review[] =>
  state[NameSpace.Comments].comments;

export const getCommentsStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].fetchStatus;

export const getPostCommentStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].postStatus;

export const getCommentStatus = createSelector(
  [getCommentsStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
    isSuccess: status === FetchStatus.Success,
    isError: status === FetchStatus.Failed,
  })
);
