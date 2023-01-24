import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Review } from '../../types/review';
import { fetchComments, postComment } from '../api-action/api-action-offers';

type InitialState = {
  comments: Review[],
  fetchStatus: FetchStatus,
  postStatus: FetchStatus,
};

const initialState: InitialState = {
  comments: [],
  fetchStatus: FetchStatus.Idle,
  postStatus: FetchStatus.Idle,
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.fetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.fetchStatus = FetchStatus.Failed;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.postStatus = FetchStatus.Success;
      })
      .addCase(postComment.pending, (state) => {
        state.postStatus = FetchStatus.Loading;
      })
      .addCase(postComment.rejected, (state) => {
        state.postStatus = FetchStatus.Failed;
      });
  },
});
