import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './app/app';
import { CITY } from './mocks/cities';
import { roomOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
    <App roomOffers={roomOffers} reviews={reviews} city={CITY}/>
  </React.StrictMode>
  </BrowserRouter>

);
