import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Material UI
import { CircularProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './config/theme';

// Redux
import store from './store';

import App from './App';

const root = document.getElementById('root');

render(
  <ThemeProvider theme={theme}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh'
      }}>
      <CircularProgress color="primary" size={80} />
    </div>
  </ThemeProvider>,
  root
);

store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    root
  );
});
