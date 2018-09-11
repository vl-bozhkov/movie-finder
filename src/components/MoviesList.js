import React, { Component } from 'react';
import Movie from './Movie';

// const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const API_KEY = 'fa12fc1e59ab1b0c6d4f9bd143e6e73b';
// const POSTER_PATH = 'http://image.tmdb.org/t/p/w92';
// const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MoviesList extends Component {
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
    if (this.state.movies.length <= 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
