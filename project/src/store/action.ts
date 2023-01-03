import {createAction} from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { UserData } from '../types/user-data';

const setUserData = createAction<UserData | null>('server/setUserData');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

export { redirectToRoute, setUserData, setOffersDataLoadingStatus};
