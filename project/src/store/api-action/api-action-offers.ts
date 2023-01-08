import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { RoomOffer } from '../../types/room-offer';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';
import { toast } from 'react-toastify';

const fetchOffersList = createAsyncThunk<RoomOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersList ',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<RoomOffer[]>(APIRoute.Offers);
    return data;
  } catch (e) {
    toast.error('Please reload the page if you want to send a message again');
    throw e;
  }
  },
);

const fetchOffer = createAsyncThunk<RoomOffer, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer ',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(`${APIRoute.Offer}/${id}`);
      return data;
    } catch (e) {
    toast.error('Please reload the page if you want to send a message again');
    throw e;
    }

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

export { fetchOffersList, fetchComments, fetchOffer };
