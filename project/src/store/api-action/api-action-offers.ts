import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { RoomOffer } from '../../types/room-offer';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';

const fetchOffersList = createAsyncThunk<RoomOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersList ',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<RoomOffer[]>(APIRoute.Offers);
    return data;
  },
);

const fetchComments = createAsyncThunk<Review[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments ',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export { fetchOffersList, fetchComments };
