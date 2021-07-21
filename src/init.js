/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { render } from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './rootReducer';
import { ru } from './utils/locales';

export default async () => {
  await i18next.use(initReactI18next).init({
    lng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru,
    },
  });

  const store = configureStore({ reducer: rootReducer });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
