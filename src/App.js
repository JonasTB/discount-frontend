import React from 'react';
import Routes from './routes/index';

import AppProvider from './hooks/index'

function App() {
  return (
    <AppProvider >
      <Routes />
    </AppProvider>
  );
}

export default App;
