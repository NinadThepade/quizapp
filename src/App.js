import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage}></Route>
    </BrowserRouter>
  );
}

export default App;
