import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { APIRoute, AuthStatus } from '../../const';
import { getAuthStatus } from '../action';

const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(getAuthStatus(AuthStatus.auth));
    } catch {
      dispatch(getAuthStatus(AuthStatus.noAuth));
    }
  },
);


export { checkAuth };
