import React, { Component } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import './App.css';
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends Component {
  state = {
    movies: []
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
      console.log(movies);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(API_KEY);
    return (
      <div>
        <Header />
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie.title} />
        ))}
      </div>
    );
  }
}

export default App;
