import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes />
    <GlobalStyles/>
    <ToastContainer autoClose={3000} position='top-center'/>
  </>
);


