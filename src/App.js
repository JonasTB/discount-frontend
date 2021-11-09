import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppProvider from './hooks'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AppProvider >
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
