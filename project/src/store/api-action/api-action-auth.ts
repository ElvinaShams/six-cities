import { State } from './../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { APIRoute } from '../../const';

const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);


export { checkAuth };
