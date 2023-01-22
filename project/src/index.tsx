import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './app/app';
import {Provider} from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from './components/Notification';
import { ScrollToTop } from './components/ScrollToTop';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ToastContainer />
        <Notification />
        <ScrollToTop />
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
