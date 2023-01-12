import {createAction} from '@reduxjs/toolkit';
import { AppRoute } from '../const';

const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

export { redirectToRoute };
