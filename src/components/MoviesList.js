import React, { Component } from 'react';
import Pagination from './Pagination';
import Movie from './Movie';

// const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const API_KEY = 'fa12fc1e59ab1b0c6d4f9bd143e6e73b';
// const POSTER_PATH = 'http://image.tmdb.org/t/p/w92';
// const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MoviesList extends Component {
  state = {
    movies: [],
    page: 1
  };
  async componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          this.state.page
        }`
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  pageUP = () => {
    this.setState({ page: this.state.page + 1 });
    this.callAPI();
  };

  pageDOWN = () => {
    if (this.state.page >= 1) {
      this.setState({ page: this.state.page - 1 });
      this.callAPI();
    }
  };

  render() {
    if (this.state.movies.length <= 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className=" wrapper">
        <Pagination pageDOWN={this.pageDOWN} pageUP={this.pageUP} />
        <div className="row ">
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MoviesList;
