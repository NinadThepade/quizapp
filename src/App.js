import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import QuizPage from './components/QuizPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage}></Route>
      <Route path="/start-quiz" exact component={QuizPage}></Route>
    </BrowserRouter>
  );
}

export default App;
