import { AuthStatus, NameSpace } from "../../const";
import { State } from "../../types/state";

export const getAuthorizationStatus = (state: State): AuthStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State) => state[NameSpace.User].user;
