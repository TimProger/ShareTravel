import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './colors.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Позволяет работать с путями */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);