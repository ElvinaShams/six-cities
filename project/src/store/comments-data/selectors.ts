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

export const selectSortedComments = createSelector(
  [getComments],
  (comments) => {
    const sortedComments = comments
      .slice()
      .sort((a: Review, b: Review) => Date.parse(b.date) - Date.parse(a.date));
    return sortedComments;
  }
);

export const selectPostCommentStatus = createSelector(
  [getPostCommentStatus],
  (status) => ({
    isLoading: status === FetchStatus.Loading,
    isError: status === FetchStatus.Failed,
    isSuccess: status === FetchStatus.Success,
  })
);
