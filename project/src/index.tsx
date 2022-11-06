import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './app/app';
import { roomOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
    <App roomOffers={roomOffers} reviews={reviews} />
  </React.StrictMode>
  </BrowserRouter>

);
