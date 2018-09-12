import React, { Component } from 'react';
import Genres from './Genres';

// const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const API_KEY = 'fa12fc1e59ab1b0c6d4f9bd143e6e73b';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w92';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
    trailer: {}
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${API_KEY}&language=en-US&apprend_to_response=videos`
      );
      const movie = await res.json();
      const trailerRes = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/videos?api_key=${API_KEY}&language=en-US`
      );
      const trailer = await trailerRes.json();
      this.setState({
        movie: movie,
        trailer: trailer.results[0].key
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img
          className="img-fluid w-100"
          src={`${BACKDROP_PATH}${movie.backdrop_path}`}
          alt={movie.title}
        />

        <div className="media shadow  mt-1 mx-1 p-1">
          {/* <img
            className="mr-2 "
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          /> */}
          <div className="media-body">
            <div>
              <h3>
                {movie.title}{' '}
                <span className="release font-weight-light">
                  ({movie.release_date})
                </span>
              </h3>
            </div>
            <span className="badge badge-light d-inline-block mr-1">
              <ion-icon name="star" />
              {movie.vote_average}
              /10
              <span className="d-inline ml-2">{movie.vote_count} votes</span>
            </span>
            <span class="border-right" />
            <span className="badge badge-light d-inline-block ml-1 mr-1">
              Runtime:
              {movie.runtime} Minutes
            </span>
            <span class="border-right mr-1" />
            <Genres genres={movie.genres} />
            <span class="border-right ml-1" />
            <span className=" ml-1 badge badge-light d-inline-block ml-1 mr-1">
              {movie.release_date}
              <span className="ml-1 text-uppercase">
                ({movie.original_language})
              </span>
            </span>
            <span className="border-right" />

            <span class="badge badge-light d-inline-block ml-1 mr-1">
              Budget:
              {movie.budget}$
            </span>

            <p className=" text-justify mr-2">{movie.overview}</p>

            <a
              target="_blank"
              href={movie.homepage}
              class="btn btn-outline-dark d-inline-block mr-1 mt-2 "
            >
              <h4>Home Page </h4>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="mt-1 embed-responsive embed-responsive-21by9">
              <iframe
                title={this.state.movie.title}
                className="embed-responsive-item"
                src={`https://www.youtube-nocookie.com/embed/${
                  this.state.trailer
                }?rel=0&amp;controls=0&amp;showinfo=0`}
                allowFullScreen
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
