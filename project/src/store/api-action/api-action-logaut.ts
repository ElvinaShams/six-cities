import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { getAuthStatus, setError } from '../action';
import { dropToken } from '../../services/token';
import { store } from '..';

const Logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(getAuthStatus(AuthStatus.noAuth));
  },
);

const clearError = createAsyncThunk(
  'user/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export { Logout, clearError };
