import React from 'react';
import { AdProvider } from './AdContext';
import './App.css'
const AddAd = React.lazy( () => import('./AddAd'));
const AdsList = React.lazy( () => import('./AdsList'));

function App() {
  return (
    <AdProvider>
      <div className="App">
        <h1>Interactive ad board &hearts;</h1>
        <AddAd />
        <AdsList />
      </div>
    </AdProvider>
  );
}

export default App;
