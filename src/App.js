import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

const Test = () => <h1>Test</h1>;
