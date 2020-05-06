import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import QuizPage from './components/QuizPage'
import ResultsPage from './components/ResultsPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/quizapp/" exact component={LandingPage}></Route>
      <Route path="/quizapp/start-quiz" exact component={QuizPage}></Route>
      <Route path="/quizapp/show-results" exact component={ResultsPage}></Route>
    </BrowserRouter>
  );
}

export default App;
