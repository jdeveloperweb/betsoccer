import React from 'react';
import Routes from './Routes';
import Resources from './Pages/hooks/Resources'

export default function App() {

  const isLoadingComplete = Resources();
  if (!isLoadingComplete) {
    return null;
  } else {

  return (
    <Routes />
  );
  }

}