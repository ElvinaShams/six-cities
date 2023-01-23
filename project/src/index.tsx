import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {Provider} from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from './components/Notification';
import { ScrollToTop } from './components/ScrollToTop';
import { HistoryRouter } from './components/HistoryRouter';
import { browserHistory} from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HistoryRouter history={browserHistory}>
    <React.StrictMode>
      <Provider store={store}>
        <ToastContainer />
        <Notification />
        <ScrollToTop />
        <App />
      </Provider>
    </React.StrictMode>
    </HistoryRouter>
);
