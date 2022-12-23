import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './app/app';
import { reviews } from './mocks/reviews';
import {Provider} from 'react-redux';
import { store } from './store';
import { checkAuth } from './store/api-action/api-action-auth';
import { fetchOffersList } from './store/api-action/api-action-offers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersList());
store.dispatch(checkAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>

);
