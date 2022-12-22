import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import resources from './locales/index.js';

import store from './slices/index.js';
import './styles/index.scss';

import App from './App.jsx';

const app = async () => {
  const i18n = i18next.createInstance();
  await i18n
    .use(initReactI18next)
    .init({
      lng: 'ru',
      debug: false,
      resources,
    });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>,
  );
};

app();
