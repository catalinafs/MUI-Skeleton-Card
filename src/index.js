import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      grey: {
        100: "#c7c7c7",
        200: "#9f9f9f",
      },
    },
  },
  secondary: {
    main: '#646464',
  }
}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);