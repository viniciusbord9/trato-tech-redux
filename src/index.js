import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import { Provider } from 'react-redux';
import defaultStore from './store';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={defaultStore}>
        <Router />
      </Provider>
  </React.StrictMode>
);
