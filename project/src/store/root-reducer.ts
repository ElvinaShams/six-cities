import { userProcess } from './user-process/user-process';
import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { appProcess } from "./app-process/app-process";
import { offersData } from "./offers-data/offers-data";
import { commentsData } from './comments-data/comments-data';
import { notifications } from './notification/notification';
import { favorites } from './favorites/favorites';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.Notifications]: notifications.reducer,
  [NameSpace.Favorites]: favorites.reducer,
});
