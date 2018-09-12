import React from 'react';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300';

const Movie = props => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 d-flex align-items-stretch">
      <div className="card my-2 mx-1 shadow">
        <Link to={`/${props.movie.id}`}>
          <img
            src={`${POSTER_PATH}${props.movie.poster_path}`}
            alt={props.movie.title}
            className="mr-3  card-img-top custom-img-card"
          />
        </Link>
        <div className="card-body">
          <h5 class="card-title">{props.movie.title}</h5>
          <p className="card-text">
            {props.movie.overview.substring(0, 100)}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
