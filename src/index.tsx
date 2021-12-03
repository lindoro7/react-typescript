import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff00'
    },
    secondary: {
      main: '#55ff99'
    },
    text: {
      primary: '#0000ff'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
