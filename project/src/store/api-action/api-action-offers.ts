import { State } from './../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '../../types/state';
import { RoomOffer } from '../../types/room-offer';
import { APIRoute } from '../../const';
import { Review, ReviewComment } from '../../types/review';
import { pushNotification } from '../notification/notification';
import { FavoriteType } from '../../types/cities';

const fetchOffersList = createAsyncThunk<
  RoomOffer[],
  undefined,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>(
  'data/fetchOffersList',
  async (_arg, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<RoomOffer[]>(APIRoute.Offers);
      return data;
    } catch (e) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not download offers',
        })
      );
      return rejectWithValue(e);
    }
  }
);

const fetchProperty = createAsyncThunk<
  RoomOffer,
  string,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>('data/fetchProperty', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get(`${APIRoute.Offers}/${id}`);
    return data;
  } catch (err) {
    dispatch(
      pushNotification({
        type: 'error',
        message: 'Can not download offer',
      })
    );
    throw err;
  }
});

const fetchComments = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>(
  'data/fetchComments',
  async (id, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      return data;
    } catch (e) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not download comments',
        })
      );
      return rejectWithValue(e);
    }
  }
);

const postComment = createAsyncThunk<
  Review[],
  ReviewComment,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>(
  'comments/postComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {
        comment,
        rating,
      });

      return data;
    } catch (err) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Please, try again',
        })
      );

      throw err;
    }
  }
);

const fetchNearby = createAsyncThunk<
  RoomOffer[],
  string,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>('data/fetchNearby', async (id, { dispatch, extra: api, rejectWithValue }) => {
  try {
    const { data } = await api.get<RoomOffer[]>(
      `${APIRoute.Offers}/${id}/nearby`
    );
    return data;
  } catch (e) {
    dispatch(
      pushNotification({
        type: 'error',
        message: 'Can not download nearby hotels',
      })
    );
    return rejectWithValue(e);
  }
});

const fetchFavorites = createAsyncThunk<
  RoomOffer[],
  undefined,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<RoomOffer[]>(APIRoute.Favorites);
      return data;
    } catch (e) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not download favorite hotels',
        })
      );
      return rejectWithValue(e);
    }
  }
);

const postFavorites = createAsyncThunk<
  RoomOffer,
  FavoriteType,
  {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }
>(
  'favorite/postFavorites',
  async ({ id, isFavorite }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<RoomOffer>(
        `4{APIRoute.Favorites}/${id}/${isFavorite}`
      );

      return data;
    } catch (e) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not add to favorites.',
        })
      );
      throw e;
    }
  }
);

export {
  fetchOffersList,
  fetchComments,
  fetchProperty,
  fetchFavorites,
  fetchNearby,
  postComment,
  postFavorites,
};
