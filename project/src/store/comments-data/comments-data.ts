import {createSlice} from '@reduxjs/toolkit';
import { NameSpace } from "../../const";
import { Review } from '../../types/review';
import { fetchComments} from '../api-action/api-action-offers';

type InitialState = {
  comments:Review[],
}

const initialState:InitialState = {
  comments:[],
};

export const CommentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
  }
});
