import { UserData } from './../../types/user-data';
import {createSlice} from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from "../../const";
import { checkAuth } from '../api-action/api-action-user';
import { loginAction } from '../api-action/api-action-user';
import { logout } from '../api-action/api-action-user';


type InitialState = {
  authorizationStatus: AuthStatus;
  user: UserData | null,
}

const initialState: InitialState = {
  authorizationStatus: AuthStatus.NoAuth,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.user=action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.user=action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      });

  }
});
