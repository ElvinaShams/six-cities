import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './app/app';
import { reviews } from './mocks/reviews';
import {Provider} from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
    <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>

);
