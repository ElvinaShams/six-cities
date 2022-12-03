import { AuthStatus } from "../const";
import { State } from "../types/state";

export const getAuthorizationStatus = (state: State): AuthStatus => state.authStatus;
export const getUserData = (state: State) => state.userData;
export const getUserEmail = (state: State) => state.userData.email;
