import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './components/app.connect';

import GlobalStyles from './styles/globals/globals.styled';

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root'),
);
