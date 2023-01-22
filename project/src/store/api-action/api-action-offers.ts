import { State } from './../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { AppDispatch } from '../../types/state';
import { RoomOffer } from '../../types/room-offer';
import { APIRoute, AppRoute } from '../../const';
import { Review, ReviewComment } from '../../types/review';
import { pushNotification } from '../notification/notification';
import { FavoriteType } from '../../types/cities';
import { redirectToRoute } from '../action';

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
    } catch (err) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not download offers',
        })
      );
      throw err;
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
    if (err instanceof AxiosError) {
      if (err.response?.status === 404) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
    }
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
    } catch (err) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not download comments',
        })
      );
      throw err;
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
  } catch (err) {
    dispatch(
      pushNotification({
        type: 'error',
        message: 'Can not download nearby hotels',
      })
    );
    throw err;
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
    } catch (err) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not download favorite hotels',
        })
      );
      throw err;
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
      const status = isFavorite ? 1 : 0;
      const { data } = await api.post<RoomOffer>(
        `${APIRoute.Favorites}/${id}/${status}`
      );

      return data;
    } catch (err) {
      dispatch(
        pushNotification({
          type: 'error',
          message: 'Can not add to favorites.',
        })
      );
      throw err;
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
