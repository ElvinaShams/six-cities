import { UserData } from './../../types/user-data';
import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { APIRoute, AppRoute } from '../../const';
import { redirectToRoute, setUserData } from '../action';
import { saveToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',

  async ({login: email, password}, {dispatch, extra: api}) => {
    try{
      const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setUserData(data));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch(e) {
      throw e;
    }
  },

);
