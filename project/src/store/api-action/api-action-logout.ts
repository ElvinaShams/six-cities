import { State } from '../../types/state';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch } from "../../types/state";
import { APIRoute } from '../../const';
import { setUserData } from '../action';
import { dropToken } from '../../services/token';

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
      dispatch(setUserData(null));
    } catch(e) {
      throw e;
    }
  },
);

export { logout };
