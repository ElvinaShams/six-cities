import { State } from '../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { APIRoute, AppRoute } from '../../const';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from '../action';

const checkAuth = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);


const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',

  async ({login: email, password}, {dispatch, extra: api}) => {
    try{
      const { data } = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    } catch(e) {
      throw e;
    }
  },

);

const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try{
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch(e) {
      throw e;
    }
  },
);

export { checkAuth, logout, loginAction };
