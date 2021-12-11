import React, { useEffect } from 'react';

import './global.css';

import Routes from './routes';

function App() {
  useEffect(() => {
    document.title = "Adventurous App"
  }, [])

  return (
    <Routes />
  );
}

export default App;
